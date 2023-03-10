const Router = require('express')
const router = new Router()
const audioController = require('../controllers/audioController')

router.post('/', audioController.create)
router.get('/', audioController.getAll)
router.get('/:id', audioController.getOne)

module.exports = router
