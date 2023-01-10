import { ICustomer_Repository } from "../../../repository/ICustomer_Repository";

export class CustomerGetAll_UseCase {
  constructor(
    private customer_Repository: ICustomer_Repository,
  ) { }

  async execute() {
    const customer = await this.customer_Repository.getAll()
    return customer
  }
}