import { Customer_Repository } from "../../../repository/implementations/controllers/Customer_Repository";
import { CustomerCreate_Controller } from "./controller";
import { CustomerCreate_UseCase } from "./use_case";

const customer_Repository = new Customer_Repository()
const customerCreate_UseCase = new CustomerCreate_UseCase(customer_Repository)
const customerCreate_Controller = new CustomerCreate_Controller(customerCreate_UseCase)

export default customerCreate_Controller