import axios from 'axios'
import { error } from 'console'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/v1',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

axiosInstance.interceptors.request.use(
  (configure) => {
    const token = localStorage.getItem('waiterapp@token')
    if (token) {
      axiosInstance.defaults.headers.common['Authorization'] = `${token}`
      axiosInstance.defaults.headers.common['Content-Type'] = 'application/json'
    }
    return configure
  },
  (error) => Promise.reject(error),
)

export { axiosInstance }
