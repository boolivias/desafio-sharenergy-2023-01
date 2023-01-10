import { Request, Response } from "express";
import UseCase_Error from "../../../exceptions/UseCase_Error";
import { CustomerGetAll_UseCase } from "./use_case";

export class CustomerGetAll_Controller {
  constructor(
    private use_case: CustomerGetAll_UseCase,
  ) { }

  async handle(req: Request, res: Response) {
    try {

      const data = await this.use_case.execute()
      return res.status(200).send(data.map((c) => ({ ...c, address: undefined, ...(c.address) })))
    } catch (err) {
      if (err instanceof UseCase_Error) {
        err.print()

        return res.status(err.statusResponse).json({
          message: err.messageResponse,
        });
      }

      throw err
    }
  }
}