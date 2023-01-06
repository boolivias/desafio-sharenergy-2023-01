import { NextFunction, Request, Response } from "express";
import UseCase_Error from "../exceptions/UseCase_Error";
import { Middleware_UseCaseDTO } from "./dto";

export class Middleware {
  constructor(
    private use_case: Middleware_UseCaseDTO
  ) { }

  async handle(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization;

    try {
      if (!token) { return res.status(401).send({ message: 'Você não tem permissão para essa ação.' }); }

      const parts = token.split(' ');

      if (parts.length !== 2) { return res.status(400).send({ message: 'Token com formato inválido' }); }

      const [scheme, token_hash] = parts;
      if (!/^Bearer$/i.test(scheme)) { return res.status(400).send({ message: 'Token com formato inválido' }); }

      req.user = await this.use_case.execute({ token: token_hash });

      return next();
    } catch (err) {
      if (err instanceof UseCase_Error) {
        err.print()

        return res.status(err.statusResponse).json({
          message: err.messageResponse,
        });
      }

      console.log(err)
      return res.status(500).send({ message: 'Erro inesperado' })
    }
  }
}