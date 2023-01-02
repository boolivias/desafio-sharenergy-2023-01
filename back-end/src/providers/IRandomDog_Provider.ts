interface IResponseSuccess {
  success: true,
  data: any,
}

interface IResponseError {
  success: false,
  errorMessage: string,
}

export type IResponse = IResponseSuccess | IResponseError

export interface IRandomDog_Provider {
  get(): Promise<IResponse>
}