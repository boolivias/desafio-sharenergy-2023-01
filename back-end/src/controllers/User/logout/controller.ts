import { Request, Response } from "express";
import UseCase_Error from "../../../exceptions/UseCase_Error";
import { UserLogout_UseCase } from "./use_case";

export class UserLogout_Controller {
  constructor(
    private use_case: UserLogout_UseCase,
  ) { }

  async handle(req: Request, res: Response) {
    try {
      const { refresh_token } = req.body

      await this.use_case.execute({ id: refresh_token })
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