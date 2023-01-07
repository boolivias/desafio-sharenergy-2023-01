import { Customer_Repository } from "../../../repository/implementations/controllers/Customer_Repository";
import { CustomerUpdate_Controller } from "./controller";
import { CustomerUpdate_UseCase } from "./use_case";

const customer_Repository = new Customer_Repository()
const customerUpdate_UseCase = new CustomerUpdate_UseCase(customer_Repository)
const customerUpdate_Controller = new CustomerUpdate_Controller(customerUpdate_UseCase)

export default customerUpdate_Controller