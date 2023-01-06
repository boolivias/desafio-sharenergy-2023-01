import { User } from "../entities/User";

export interface Middleware_RequestDTO {
  token: string,
}

export interface Middleware_UseCaseDTO {
  execute(data: Middleware_RequestDTO): Promise<Omit<User, 'password'>>,
}