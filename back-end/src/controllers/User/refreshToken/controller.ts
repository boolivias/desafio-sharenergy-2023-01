import { Request, Response } from "express";
import UseCase_Error from "../../../exceptions/UseCase_Error";
import { UserRefreshToken_UseCase } from "./use_case";

export class UserRefreshToken_Controller {
  constructor(
    private use_case: UserRefreshToken_UseCase,
  ) { }

  async handle(req: Request, res: Response) {
    try {
      const { refresh_token } = req.body

      const data = await this.use_case.execute({ refresh_token })

      return res.status(200).send(data)
    } catch (error) {
      if (error instanceof UseCase_Error) {
        error.print()

        return res.status(error.statusResponse).send({
          message: error.messageResponse,
        })
      }

      throw error
    }
  }
}