import { $authHost, $host } from '.'

export const addDeviceToBasket = async (id) => {
  const { data } = await $authHost.post('api/basket', { id })
  return data
}

export const getDevicesFromBasket = async () => {
  const { data } = await $authHost.get('api/basket')
  return data
}

export const removeDevice = async (id) => {
  const { data } = await $authHost.delete('api/basket/delete', { params: { id } })
  return data
}
