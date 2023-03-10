const Router = require('express')
const router = new Router()
const basketController = require('../controllers/basketController')
const audioController = require("../controllers/audioController");

router.post('/', basketController.create)
router.get('/:id', basketController.getOne)

module.exports = router
