import { ICustomer_Repository } from "../../../repository/ICustomer_Repository";
import { CustomerCreate_RequestDTO } from "./dto";

export class CustomerCreate_UseCase {
  constructor(
    private customer_repository: ICustomer_Repository,
  ) { }

  execute({ customer }: CustomerCreate_RequestDTO) {
    return this.customer_repository.create(customer)
  }
}