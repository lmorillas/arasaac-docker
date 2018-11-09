const router = require('express').Router()
const wordsController = require('../controllers/wordsController')

router.get('/conjugations/:language/:word', (req, res) => {
  wordsController.getConjugations(req, res)
})
module.exports = router
