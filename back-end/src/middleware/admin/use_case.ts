import { User } from "../../entities/User";
import UseCase_Error from "../../exceptions/UseCase_Error";
import { IToken_Provider } from "../../providers/IToken_Provider";
import { Middleware_RequestDTO, Middleware_UseCaseDTO } from "../dto";

export class AdminMiddleware_UseCase implements Middleware_UseCaseDTO {
  constructor(
    private token_provider: IToken_Provider,
  ) { }

  async execute({ token }: Middleware_RequestDTO): Promise<Omit<User, 'password'>> {
    const data = await this.token_provider.decode(token)
    if(!data)
      throw new UseCase_Error(401, 'Sessão expirada', 'Token expirou')

    return data as User;
  }
}