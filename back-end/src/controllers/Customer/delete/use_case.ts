import UseCase_Error from "../../../exceptions/UseCase_Error";
import { ICustomer_Repository } from "../../../repository/ICustomer_Repository";
import { CustomerDelete_RequestDTO } from "./dto";

export class CustomerDelete_UseCase {
  constructor(
    private customer_Repository: ICustomer_Repository,
  ) { }

  async execute({ id }: CustomerDelete_RequestDTO) {
    const customerExists = await this.customer_Repository.getById(id)
    if (!customerExists) throw new UseCase_Error(404, 'Cliente não encontrado', 'ID não foi encontrando no banco de dados')

    await this.customer_Repository.delete(id)
  }
}