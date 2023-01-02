import axios, { AxiosRequestConfig } from 'axios'

const url_api = 'http://localhost:3333/'

const options: AxiosRequestConfig = {
  baseURL: url_api,
}

const api = axios.create(options)

export default api