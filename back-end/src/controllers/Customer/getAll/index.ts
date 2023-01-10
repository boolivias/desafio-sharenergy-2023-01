import { Customer_Repository } from "../../../repository/implementations/controllers/Customer_Repository";
import { CustomerGetAll_Controller } from "./controller";
import { CustomerGetAll_UseCase } from "./use_case";

const customer_Repository = new Customer_Repository()
const customerGetAll_UseCase = new CustomerGetAll_UseCase(customer_Repository)
const customerGetAll_Controller = new CustomerGetAll_Controller(customerGetAll_UseCase)

export default customerGetAll_Controller