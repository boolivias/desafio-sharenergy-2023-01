import { PrismaClient } from "@prisma/client";
import { User } from "../../../entities/User";
import { IUser_Repository } from "../../IUser_Repository";

export class User_Repository implements IUser_Repository {
  private prisma

  constructor() {
    this.prisma = new PrismaClient()
  }

  async getByUsername(username: string): Promise<User | null> {
    const user = await this.prisma.user.findFirst({
      where: { username },
    })

    return user;
  }

  async getById(id: string): Promise<User | null> {
    const user = await this.prisma.user.findFirst({
      where: { id, }
    })

    return user
  }
}