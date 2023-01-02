import { HTTPCats_Provider } from "../../../providers/implementations/HTTPCats_Provider";
import { HTTPCatGet_Controller } from "./controller";
import { HTTPCatGet_UseCase } from "./use_case";

const httpcat_provider = new HTTPCats_Provider()
const use_case = new HTTPCatGet_UseCase(httpcat_provider)
const controller = new HTTPCatGet_Controller(use_case)

export default controller
