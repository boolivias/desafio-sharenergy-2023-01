import { Hash_Provider } from "../../../providers/implementations/Hash_Provider"
import { Token_Provider } from "../../../providers/implementations/Token_Provider"
import { RefreshToken_Repository } from "../../../repository/implementations/controllers/RefreshToken_Repository"
import { User_Repository } from "../../../repository/implementations/controllers/User_Repository"
import { UserAuth_Controller } from "./controller"
import { UserAuth_UseCase } from "./use_case"

const user_repository = new User_Repository()
const refreshToken_repository = new RefreshToken_Repository()
const hash_provider = new Hash_Provider()
const token_provider = new Token_Provider()

const userAuth_UseCase = new UserAuth_UseCase(user_repository, refreshToken_repository, hash_provider, token_provider)
const userAuth_Controller = new UserAuth_Controller(userAuth_UseCase)

export default userAuth_Controller