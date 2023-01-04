import { Request, Response } from "express";
import UseCase_Error from "../../../exceptions/UseCase_Error";
import { UserAuth_UseCase } from "./use_case";

export class UserAuth_Controller {
  constructor(
    private use_case: UserAuth_UseCase,
  ) { }

  async handle(req: Request, resp: Response) {
    try {
      const { user, password } = req.body
      const result = await this.use_case.execute({ username: user, password, })

      return resp.status(200).send(result)
    } catch (err) {
      if (err instanceof UseCase_Error) {
        err.print()

        return resp.status(err.statusResponse).json({
          message: err.messageResponse,
        });
      }

      throw err
    }
  }
}