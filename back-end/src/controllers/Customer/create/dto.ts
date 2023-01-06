import { Customer } from "../../../entities/Customer";

export interface CustomerCreate_RequestDTO {
  customer: Omit<Customer, 'id'>,
}