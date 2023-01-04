import { Token_Provider } from "../../../providers/implementations/Token_Provider"
import { RefreshToken_Repository } from "../../../repository/implementations/controllers/RefreshToken_Repository"
import { User_Repository } from "../../../repository/implementations/controllers/User_Repository"
import { UserRefreshToken_Controller } from "./controller"
import { UserRefreshToken_UseCase } from "./use_case"

const refreshToken_Repository = new RefreshToken_Repository()
const user_Repository = new User_Repository()
const token_Provider = new Token_Provider()

const userRefreshToken_UseCase = new UserRefreshToken_UseCase(
  refreshToken_Repository,
  user_Repository,
  token_Provider,
)
const userRefreshToken_Controller = new UserRefreshToken_Controller(
  userRefreshToken_UseCase,
)

export default userRefreshToken_Controller