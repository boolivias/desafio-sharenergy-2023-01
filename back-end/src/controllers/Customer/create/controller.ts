import { Request, Response } from "express";
import UseCase_Error from "../../../exceptions/UseCase_Error";
import { CustomerCreate_UseCase } from "./use_case";

export class CustomerCreate_Controller {
  constructor(
    private use_case: CustomerCreate_UseCase,
  ) { }

  async handle(req: Request, res: Response) {
    try {
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

      const data = await this.use_case.execute({ customer })
      return res.status(200).send(data)
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