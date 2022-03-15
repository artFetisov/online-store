import axios from 'axios'

export const REACT_APP_API_URL = 'http://localhost:5000/'

const $host = axios.create({
  baseURL: REACT_APP_API_URL,
})

const $authHost = axios.create({
  baseURL: REACT_APP_API_URL,
})

const authInterceptor = (config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
  return config
}

$authHost.interceptors.request.use(authInterceptor)

export { $host, $authHost }
