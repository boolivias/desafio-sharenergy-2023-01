import { Token_Provider } from "../../providers/implementations/Token_Provider";
import { Middleware } from "../controller";
import { AdminMiddleware_UseCase } from "./use_case";

const token_provider = new Token_Provider()
const adminMiddleware_UseCase = new AdminMiddleware_UseCase(token_provider)
const adminMiddleware_Controller = new Middleware(adminMiddleware_UseCase)

export default adminMiddleware_Controller