import axios, { AxiosRequestConfig } from 'axios'

const url_api = 'https://randomuser.me/api/'

const options: AxiosRequestConfig = {
  baseURL: url_api,
}

const apiRandomUsers = axios.create(options)

export default apiRandomUsers