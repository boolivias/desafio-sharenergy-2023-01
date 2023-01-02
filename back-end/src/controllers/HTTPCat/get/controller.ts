import { Request, Response } from "express";
import fs from "fs";
import UseCase_Error from "../../../exceptions/UseCase_Error";
import { HTTPCatGet_UseCase } from "./use_case";

export class HTTPCatGet_Controller {
  constructor(
    private use_case: HTTPCatGet_UseCase,
  ) { }

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { code } = request.params

      const path_image = await this.use_case.execute({ code });

      fs.readFile(path_image, (err, data) => {
        if(err) throw err

        response.writeHead(200, { 'Content-Type': 'image/jpeg' });
        response.end(data);
      })
      // return response.status(200).send(resp_UseCase)
    } catch (err) {
      if (err instanceof UseCase_Error) {
        err.print()

        return response.status(err.statusResponse).json({
          message: err.messageResponse,
        });
      }

      throw err
    }
  }
}