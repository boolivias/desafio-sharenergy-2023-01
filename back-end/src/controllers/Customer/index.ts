import customerCreate_Controller from "./create";
import customerDelete_Controller from "./delete";
import customerGetById_Controller from "./getById";
import customerUpdate_Controller from "./update";

export default {
  create: customerCreate_Controller,
  update: customerUpdate_Controller,
  delete: customerDelete_Controller,
  getById: customerGetById_Controller,
}