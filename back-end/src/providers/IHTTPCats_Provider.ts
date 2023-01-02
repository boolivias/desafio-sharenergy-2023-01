interface IResponseSuccess {
  success: true,
  data: any,
}

interface IResponseError {
  success: false,
  errorMessage: string,
}

export type IResponse = IResponseSuccess | IResponseError

export interface IHTTPCats_Provider {
  getImage(status_code: string): Promise<IResponse>,
}