import UseCase_Error from "../../../exceptions/UseCase_Error";
import { IRandomDog_Provider } from "../../../providers/IRandomDog_Provider";

export class RandomDogGet_UseCase {
  constructor(
    private randomDog_provider: IRandomDog_Provider,
  ) { }

  async execute() {
    const result = await this.randomDog_provider.get();

    if (!result.success)
      throw new UseCase_Error(502, 'Erro inesperado. Tente novamente mais tarde', result.errorMessage);

    return result
  }
}