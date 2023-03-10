const Router = require('express')
const router = new Router()
const audioRouter = require('./audioRouter')
const userRouter = require('./userRouter')
const categoryRouter = require('./categoryRouter')
const basketRouter = require('./basketRouter')

router.use('/user', userRouter)
router.use('/category', categoryRouter)
router.use('/audio', audioRouter)
router.use('/basket', basketRouter)

module.exports = router
