import { Customer as PrismaCustomer, PrismaClient } from "@prisma/client";
import { Customer } from "../../../entities/Customer";
import { ICustomer_Repository } from "../../ICustomer_Repository";

export class Customer_Repository implements ICustomer_Repository {
  private prisma

  constructor() {
    this.prisma = new PrismaClient()
  }

  private toEntity(data: PrismaCustomer): Customer {
    const { street, number, city, state, complement, ...others } = data
    const address = { street, number, city, state, complement, }

    return {
      ...others,
      address,
    }
  }

  async create(data: Omit<Customer, 'id'>): Promise<Customer> {
    const { address, ...others } = data

    const customer = await this.prisma.customer.create({
      data: {
        ...others,
        ...address,
      }
    })

    return this.toEntity(customer)
  }

  async update(id: string, data: Partial<Customer>): Promise<boolean> {
    const { address, ...others } = data

    const customer = await this.prisma.customer.update({
      data: {
        ...others,
        ...address,
      },
      where: { id },
    })

    return !!customer
  }

  async delete(id: string): Promise<boolean> {
    const customerDeleted = await this.prisma.customer.delete({ where: { id } })

    return !!customerDeleted
  }

  async getById(id: string): Promise<Customer | null> {
    const customer = await this.prisma.customer.findFirst({ where: { id } })

    if (!customer)
      return null

    return this.toEntity(customer)
  }
}