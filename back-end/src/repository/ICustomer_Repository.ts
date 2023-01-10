import { Customer } from "../entities/Customer";

export interface ICustomer_Repository {
  create(data: Omit<Customer, 'id'>): Promise<Customer>
  update(id: Customer['id'], data: Partial<Customer>): Promise<boolean>
  delete(id: Customer['id']): Promise<boolean>
  getById(id: Customer['id']): Promise<Customer | null>
  getAll(): Promise<Customer[]>
}