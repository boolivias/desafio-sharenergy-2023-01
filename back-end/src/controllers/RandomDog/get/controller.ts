import { Request, Response } from "express";
import fs from "fs";
import UseCase_Error from "../../../exceptions/UseCase_Error";
import { RandomDogGet_UseCase } from "./use_case";

export class RandomDogGet_Controller {
  constructor(
    private use_case: RandomDogGet_UseCase,
  ) { }

  async handle(_: Request, resp: Response) {
    try {
      const result = await this.use_case.execute()

      fs.readFile(result.data.path_file, (err, data) => {
        if (err) throw err

        resp.writeHead(200, { 'Content-Type': result.data.type })
        resp.end(data)
      })
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