import UseCase_Error from "../../../exceptions/UseCase_Error";
import { IToken_Provider } from "../../../providers/IToken_Provider";
import { IRefreshToken_Repository } from "../../../repository/IRefreshToken_Repository";
import { IUser_Repository } from "../../../repository/IUser_Repository";
import { UserRefreshToken_RequestDTO } from "./dto";

export class UserRefreshToken_UseCase {
  constructor(
    private refreshToken_Repository: IRefreshToken_Repository,
    private user_Repository: IUser_Repository,
    private token_Provider: IToken_Provider,
  ) { }

  async execute({ refresh_token: old_refresh }: UserRefreshToken_RequestDTO) {
    const refresh_token = await this.refreshToken_Repository.getById(old_refresh)

    if (!refresh_token)
      throw new UseCase_Error(401, 'Sessão expirada', 'Token não encontrando no banco de dados')

    const user = await this.user_Repository.getById(refresh_token.user_id)
    delete user?.password

    const token = await this.token_Provider.generate(user)

    return { refresh_token: refresh_token?.id, token }
  }
}