import { makeAutoObservable } from 'mobx'

export class BasketStore {
  constructor() {
    this._devices = []
    this._totalPrice = 0
    makeAutoObservable(this)
  }

  setDevices(devices) {
    this._devices = devices
  }

  get devices() {
    return this._devices
  }

  get totalPrice() {
    return (this._totalPrice = this._devices.reduce((sum, current) => sum + current.price, 0))
  }
}
