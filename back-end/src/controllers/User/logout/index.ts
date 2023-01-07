import { RefreshToken_Repository } from "../../../repository/implementations/controllers/RefreshToken_Repository";
import { UserLogout_Controller } from "./controller";
import { UserLogout_UseCase } from "./use_case";

const refreshToken_Repository = new RefreshToken_Repository()
const userLogout_UseCase = new UserLogout_UseCase(refreshToken_Repository)
const userLogout_Controller = new UserLogout_Controller(userLogout_UseCase)

export default userLogout_Controller