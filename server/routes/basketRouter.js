const Router = require('express')
const router = new Router()
const basketController = require('../controllers/basketController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/', authMiddleware, basketController.addDevice)
router.get('/', authMiddleware, basketController.getDeviceFromBasket)
router.delete('/delete', authMiddleware, basketController.deleteDevice)

module.exports = router
