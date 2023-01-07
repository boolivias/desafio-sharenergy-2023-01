import { Request, Response } from "express";
import UseCase_Error from "../../../exceptions/UseCase_Error";
import { CustomerGetById_UseCase } from "./use_case";

export class CustomerGetById_Controller {
  constructor(
    private use_case: CustomerGetById_UseCase,
  ) { }

  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params

      const data = await this.use_case.execute({ id })
      return res.status(200).send({ ...data, address: undefined, ...(data.address) })
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