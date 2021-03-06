const router = require('express').Router()
const materials = require('./materials')
const users = require('./users')
const words = require('./words')
const pictograms = require('./pictograms')
const locutions = require('./locutions')
const categories = require('./categories.js')

const returnRouter = io => {
  const catalogs = require('./catalogs')(io)
  router.use('/materials', materials)
  router.use('/pictograms', pictograms)
  router.use('/locutions', locutions)
  router.use('/users', users)
  router.use('/words', words)
  router.use('/catalogs', catalogs)
  router.use('/categories', categories)

  router.get('/', (req, res) => {
    res.status(200).json({ message: 'Connected to ARASAAC private API' })
  })
  return router
}

module.exports = returnRouter
