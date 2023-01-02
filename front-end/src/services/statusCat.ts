import axios, { AxiosRequestConfig } from 'axios'

const url_api = 'https://http.cat/'

const options: AxiosRequestConfig = {
  baseURL: url_api,
}

const apiStatusCat = axios.create(options)

export default apiStatusCat