import { RefreshToken, User } from "@prisma/client";

export interface IRefreshToken_Repository {
  create(userId: User['id']): Promise<RefreshToken>
  delete(id: RefreshToken['id']): Promise<boolean>
  getById(id: RefreshToken['id'], renovateId?: boolean): Promise<RefreshToken | null>
}