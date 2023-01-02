import axios, { AxiosInstance } from "axios";
import fs from "fs";
import path from "path";
import { v4 } from "uuid";
import { IRandomDog_Provider, IResponse } from "../IRandomDog_Provider";

export class RandomDog_Provider implements IRandomDog_Provider {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: 'https://random.dog/',
    })
  }

  async get(): Promise<IResponse> {
    const resp = await this.api.get('/woof')

    if (resp.status !== 200)
      return {
        success: false,
        errorMessage: 'Não foi possível recuperar os dados. Tente novamente mais tarde.',
      }

    return new Promise((resolve, reject) => {
      this.api.get(resp.data, { responseType: 'stream' })
        .then((file_resp) => {
          let file_extension = resp.data.split('.')
          file_extension = file_extension[file_extension.length - 1]

          const path_file = path.resolve('temp', `${v4()}.${file_extension}`)
          file_resp.data.pipe(fs.createWriteStream(path_file))

          file_resp.data.on('end', () => {
            resolve({
              success: true as true, // fix type
              data: {
                path_file,
                type: (file_resp.headers.getContentType as () => string)(),
              },
            })
          })
        })
        .catch((e) => {
          resolve({
            success: false,
            errorMessage: e.message,
          })
        })
    })
  }
}
