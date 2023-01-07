import { PrismaClient, RefreshToken } from "@prisma/client";
import { v4 } from "uuid";
import { IRefreshToken_Repository } from "../../IRefreshToken_Repository";

export class RefreshToken_Repository implements IRefreshToken_Repository {
  private prisma

  constructor() {
    this.prisma = new PrismaClient()
  }

  async create(userId: string): Promise<RefreshToken> {
    const refresh_token = await this.prisma.refreshToken.create({
      data: {
        user_id: userId,
      }
    })

    return refresh_token
  }

  async delete(id: string): Promise<boolean> {
    const refreshDeleted = await this.prisma.refreshToken.delete({ where: { id } })

    return !!refreshDeleted
  }

  async getById(id: string, renovateId = false,): Promise<RefreshToken | null> {
    const refresh_token = await (
      renovateId
        ? (this.prisma.refreshToken.update({
          where: { id, },
          data: { id: v4(), }
        }))
        : (this.prisma.refreshToken.findFirst({
          where: { id, }
        }))
    )

    return refresh_token
  }
}