import axios, { AxiosInstance } from "axios";
import fs from "fs";
import path from "path";
import { v4 } from "uuid";
import { IHTTPCats_Provider, IResponse } from "../IHTTPCats_Provider";

export class HTTPCats_Provider implements IHTTPCats_Provider {
  private api: AxiosInstance

  constructor() {
    this.api = axios.create({
      baseURL: 'https://http.cat/',
    })
  }

  getImage(status_code: string): Promise<IResponse> {
    return new Promise((resolve, reject) => {
      this.api.get(`${status_code}.jpg`, { responseType: 'stream' })
        .then((resp) => {
          const path_image = path.resolve('temp', `${v4()}.jpg`)
          resp.data.pipe(fs.createWriteStream(path_image))

          resp.data.on('end', () => {
            resolve({
              success: true as true, // fix type
              data: path_image,
            })
          })
        })
        .catch((e) => {
          console.log(e)
          reject({
            success: false,
            errorMessage: e.response?.status === 404 ? 'Imagem não encontrada' : e.message,
          })
        })
    })
  }
}