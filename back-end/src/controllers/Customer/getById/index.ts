import { Customer_Repository } from "../../../repository/implementations/controllers/Customer_Repository";
import { CustomerGetById_Controller } from "./controller";
import { CustomerGetById_UseCase } from "./use_case";

const customer_Repository = new Customer_Repository()
const customerGetById_UseCase = new CustomerGetById_UseCase(customer_Repository)
const customerGetById_Controller = new CustomerGetById_Controller(customerGetById_UseCase)

export default customerGetById_Controller