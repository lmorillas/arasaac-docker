const User = require('../models/User')
const { ObjectID } = require('mongodb')
const moment = require('moment')
const randomize = require('randomatic')
// TODO: use Joi or mongodb validation
// const Joi = require('joi')
const CustomError = require('../utils/CustomError')
const { objectToDotNotation } = require('../utils/mongo')
const { sendWelcomeMail } = require('../emails')
const logger = require('../utils/logger')

const create = async (req, res) => {
  const {
    name,
    email,
    provider,
    locale,
    password,
    url,
    company,
    role,
    targetLanguages
  } = req.body
  const userData = {
    name,
    email,
    provider,
    locale,
    password,
    url,
    company,
    role,
    targetLanguages
  }

  logger.debug(`Creating user with data: ${JSON.stringify(userData)}`)
  try {
    let user = await User.findOne({ email })
    if (user) {
      // it can be activated or not
      if (user.isVerified) {
        throw new CustomError(
          'You have already signed up and confirmed your account. Did you forget your password?',
          409
        )
      }
      throw new CustomError(
        `You have already signed up. Please check your email to verify your account`,
        403
      )
    }
    user = new User(userData)
    const savedUser = await user.save()
    logger.debug(`Create user with data: ${JSON.stringify(savedUser)}`)
    await sendWelcomeMail(user)

    // else send verification email based on its locale
    res.status(201).json({
      message:
        'An email has been sent to you. Please check it to verify your account.',
      _id: savedUser._id
    })
  } catch (err) {
    logger.error(`Error creating user: ${err.message}`)
    res.status(err.httpCode || 500).json({
      message: 'Error creating user. See error field for detail',
      error: err.message
    })
  }
}

const activate = async (req, res) => {
  const verifyToken = req.params.code
  try {
    const user = await User.findOne({ verifyToken })
    if (!user) throw new CustomError('INVALID_CODE', 400)
    const tokenDate = moment(user.lastLogin)
    const actualDate = moment()
    const EXPIRY_TIME = 1440 // minutes in one day
    if (actualDate.diff(tokenDate, 'minutes') > EXPIRY_TIME) {
      throw new CustomError('EXPIRED_CODE', 400)
    }
    user.verifyToken = ''
    user.save()
    res.status(200).json({
      message: 'User account verified.',
      _id: user._id
    })
  } catch (err) {
    res.status(err.httpCode || 500).json({
      message: 'Error activating user. See error field for detail',
      error: err.message
    })
  }
}

const remove = (req, res) => {
  const id = req.swagger.params.id.value
  User.findByIdAndRemove(id, (err, users) => {
    if (err) {
      return res.status(404).json({
        message: `User not found. User Id: ${id}`
      })
    }
    return res.status(200).json(users)
  })
}

const getAll = async (req, res) => {
  try {
    const users = await User.find(
      {},
      '-password -idAuthor -authToken -google -facebook'
    )
    return res.status(200).json(users)
  } catch (err) {
    return res.status(500).json(err)
  }
}

const deleteFavorite = async (req, res) => {
  const { id } = req.params
  const { pictogram, tag } = req.body

  try {
    if (!ObjectID.isValid(id)) {
      return res.status(404).json([])
    }

    let params = {}
    if (tag) {
      params.favorites = {}
      params.favorites[tag] = pictogram
    }
    const dotNotated = objectToDotNotation(params)
    const updatedUser = await User.findOneAndUpdate(
      { _id: id },
      { $pull: dotNotated },
      { new: true }
    )
    return res.status(201).json({ updatedUser })
  } catch (err) {
    return res.status(500).json({
      message: 'Error updating favorites. See error field for detail',
      error: err
    })
  }
}

const deleteFavoriteTag = async (req, res) => {}

const addFavorite = async (req, res) => {
  const { id } = req.params
  const { pictogram, tag } = req.body

  try {
    if (!ObjectID.isValid(id)) {
      return res.status(404).json([])
    }

    let params = {}
    if (tag) {
      params.favorites = {}
      params.favorites[tag] = pictogram
      params.favorites.all = pictogram
    }
    const dotNotated = objectToDotNotation(params)
    // console.log(JSON.stringify(dotNotated, null, 4))

    const updatedUser = await User.findOneAndUpdate(
      { _id: id },
      { $addToSet: dotNotated },
      { new: true }
    )
    return res.status(201).json({ updatedUser })
  } catch (err) {
    return res.status(500).json({
      message: 'Error updating favorites. See error field for detail',
      error: err
    })
  }
}

const getFavorites = async (req, res) => {
  const { id } = req.params

  try {
    if (!ObjectID.isValid(id)) {
      return res.status(404).json([])
    }
    const userFavorites = await User.find({ _id: id }, 'favorites -_id')
    if (userFavorites.length === 0) return res.status(404).json([]) // send http code 404!!!
    return res.json(userFavorites)
  } catch (err) {
    return res.status(500).json({
      message: 'Error searching user. See error field for detail',
      error: err
    })
  }
}

const createPasswordlessToken = async (req, res) => {
  const { id } = req.params

  try {
    if (!ObjectID.isValid(id)) {
      return res.status(404).json([])
    }

    /* we generate passwordless token */
    const passwordlessToken = randomize('Aa0', 32)

    await User.findOneAndUpdate({ _id: id }, { passwordlessToken })
    /* generate mail with info */

    return res.status(204).json()
  } catch (err) {
    return res.status(500).json({
      message: 'Error generating passwordless token',
      error: err
    })
  }
}

module.exports = {
  create,
  remove,
  activate,
  getAll,
  addFavorite,
  getFavorites,
  deleteFavorite,
  deleteFavoriteTag,
  createPasswordlessToken
}
