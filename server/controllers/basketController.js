const { Device, BasketDevice, Basket } = require('../models/models')

class BasketController {
  async addDevice(req, res) {
    const { id } = req.body

    const device = await Device.findOne({ where: { id } })

    const { name, price, rating, img } = device
    const newDevice = await BasketDevice.create({ name, price, rating, img, basketId: req.user.id, deviceId: id })

    return res.json(newDevice)
  }

  async getDeviceFromBasket(req, res) {
    const { id } = req.user

    const devices = await BasketDevice.findAll({ where: { basketId: id } })

    return res.json(devices)
  }

  async deleteDevice(req, res) {
    const { id } = req.query
    console.log(id)
    const device = await BasketDevice.findOne({ where: { id, basketId: req.user.id } })
    await device.destroy()
    return res.json({ message: `Девайс ${device.name} удален` })
  }
}

module.exports = new BasketController()
