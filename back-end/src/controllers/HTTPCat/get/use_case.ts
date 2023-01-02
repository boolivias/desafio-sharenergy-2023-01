import UseCase_Error from "../../../exceptions/UseCase_Error";
import { IHTTPCats_Provider } from "../../../providers/IHTTPCats_Provider";
import { HTTPCatGet_RequestDTO } from "./dto";

export class HTTPCatGet_UseCase {
  constructor(private httpCat_provider: IHTTPCats_Provider) { }

  async execute({ code }: HTTPCatGet_RequestDTO): Promise<any> {
    if (!code) {
      throw new UseCase_Error(
        400,
        'O campo código é obrigatório',
        'Parâmetro \'code\' faltando',
      )
    }

    console.log('=========================> CHEGOU AQUIII')
    const response = await this.httpCat_provider.getImage(code)

    if (response.success)
      return response.data

    console.log(response)
    throw new UseCase_Error(
      response.errorMessage === 'Imagem não encontrada' ? 404 : 502,
      response.errorMessage === 'Imagem não encontrada' ? response.errorMessage : 'Ocorreu um erro inesperado. Tente novamente mais tarde.',
      response.errorMessage,
    )
  }
}