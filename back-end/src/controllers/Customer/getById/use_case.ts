import UseCase_Error from "../../../exceptions/UseCase_Error";
import { ICustomer_Repository } from "../../../repository/ICustomer_Repository";
import { CustomerGetById_RequestDTO } from "./dto";

export class CustomerGetById_UseCase {
  constructor(
    private customer_Repository: ICustomer_Repository,
  ) { }

  async execute({ id }: CustomerGetById_RequestDTO) {
    const customer = await this.customer_Repository.getById(id)
    if (!customer) throw new UseCase_Error(404, 'Cliente não encontrado', 'ID não foi encontrando no banco de dados')

    return customer
  }
}