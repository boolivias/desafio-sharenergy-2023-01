import { Customer } from "../entities/Customer";

export interface ICustomer_Repository {
  create(data: Omit<Customer, 'id'>): Promise<Customer>
}