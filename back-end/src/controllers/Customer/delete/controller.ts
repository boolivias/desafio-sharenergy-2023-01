import { Request, Response } from "express";
import UseCase_Error from "../../../exceptions/UseCase_Error";
import { CustomerDelete_UseCase } from "./use_case";

export class CustomerDelete_Controller {
  constructor(
    private use_case: CustomerDelete_UseCase,
  ) { }

  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params

      await this.use_case.execute({ id })
      return res.status(204).send()
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