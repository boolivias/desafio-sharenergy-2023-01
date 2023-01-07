import UseCase_Error from "../../../exceptions/UseCase_Error";
import { Customer_Repository } from "../../../repository/implementations/controllers/Customer_Repository";
import { CustomerUpdate_RequestDTO } from "./dto";

export class CustomerUpdate_UseCase {
  constructor(
    private customer_Repository: Customer_Repository,
  ) { }

  async execute({ customer }: CustomerUpdate_RequestDTO) {
    const customerExists = await this.customer_Repository.getById(customer.id)
    if (!customerExists) throw new UseCase_Error(404, 'Cliente não encontrado', 'ID não consta no banco de dados');

    if (customer.phone)
      customer.phone = customer.phone.replace(/\D/g, '')

    if (customer.cpf)
      customer.cpf = customer.cpf.replace(/\D/g, '')

    await this.customer_Repository.update(
      customer.id,
      { ...customer, id: undefined },
    )
  }
}