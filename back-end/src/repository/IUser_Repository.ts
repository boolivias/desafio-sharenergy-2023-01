import { User } from "../entities/User";

export interface IUser_Repository {
  getByUsername(username: string): Promise<User | null>
  getById(id: User['id']): Promise<User | null>
}