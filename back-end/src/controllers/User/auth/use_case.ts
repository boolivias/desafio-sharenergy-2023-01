import UseCase_Error from "../../../exceptions/UseCase_Error";
import { IHash_Provider } from "../../../providers/IHash_Provider";
import { IToken_Provider } from "../../../providers/IToken_Provider";
import { IRefreshToken_Repository } from "../../../repository/IRefreshToken_Repository";
import { IUser_Repository } from "../../../repository/IUser_Repository";
import { UserAuth_RequestDTO } from "./dto";

export class UserAuth_UseCase {
  constructor(
    private user_repository: IUser_Repository,
    private refreshToken_repository: IRefreshToken_Repository,
    private hash_provider: IHash_Provider,
    private token_provider: IToken_Provider,
  ) { }

  async execute({ username, password }: UserAuth_RequestDTO) {
    const user = await this.user_repository.getByUsername(username)
    if (!user || !(await this.hash_provider.compare(password, user.password as string)))
      throw new UseCase_Error(401, 'Credenciais inválidas.', 'Usuário não encontrado ou senha inválida.')

    const token = await this.token_provider.generate({
      id: user.id,
      username: user.username,
    })
    const refreshToken = await this.refreshToken_repository.create(user.id)

    return { token, refreshToken }
  }
}