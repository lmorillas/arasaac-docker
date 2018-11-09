const router = require('express').Router()
const materials = require('./materials')
const users = require('./users')
const words = require('./words')

router.use('/materials', materials)
router.use('/users', users)
router.use('/words', words)

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected to ARASAAC private API' })
})

module.exports = router
