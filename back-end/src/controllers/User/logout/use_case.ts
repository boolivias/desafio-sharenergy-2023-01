import { IRefreshToken_Repository } from "../../../repository/IRefreshToken_Repository";
import { UserLogout_RequestDTO } from "./dto";

export class UserLogout_UseCase {
  constructor(
    private refreshToken_Repository: IRefreshToken_Repository,
  ) { }

  execute({ id }: UserLogout_RequestDTO) {
    return this.refreshToken_Repository.delete(id)
  }
}