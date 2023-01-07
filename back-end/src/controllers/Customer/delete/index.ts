import { Customer_Repository } from "../../../repository/implementations/controllers/Customer_Repository";
import { CustomerDelete_Controller } from "./controller";
import { CustomerDelete_UseCase } from "./use_case";

const customer_Repository = new Customer_Repository()
const customerDelete_UseCase = new CustomerDelete_UseCase(customer_Repository)
const customerDelete_Controller = new CustomerDelete_Controller(customerDelete_UseCase)

export default customerDelete_Controller