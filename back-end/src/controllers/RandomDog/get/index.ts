import { RandomDog_Provider } from "../../../providers/implementations/RandomDog_Provider";
import { RandomDogGet_Controller } from "./controller";
import { RandomDogGet_UseCase } from "./use_case";

const randomDog_provider = new RandomDog_Provider()
const use_case = new RandomDogGet_UseCase(randomDog_provider)
const controller = new RandomDogGet_Controller(use_case)

export default controller