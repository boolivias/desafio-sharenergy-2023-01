import { Request, Response } from "express";
import UseCase_Error from "../../../exceptions/UseCase_Error";
import { CustomerUpdate_UseCase } from "./use_case";

export class CustomerUpdate_Controller {
  constructor(
    private use_case: CustomerUpdate_UseCase,
  ) { }

  async handle(req: Request, res: Response) {
    try {
      const { id } = req.params

      const {
        cpf,
        name,
        email,
        phone,
        street,
        number,
        city,
        state,
        complement,
      } = req.body

      const customer = {
        id,
        cpf,
        name,
        email,
        phone,
        address: {
          street,
          number,
          city,
          state,
          complement,
        }
      }

      await this.use_case.execute({ customer })
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