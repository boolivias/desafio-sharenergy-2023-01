import 'dotenv/config';
import jwt from 'jsonwebtoken';
import { IToken_Provider } from '../IToken_Provider';

export class Token_Provider implements IToken_Provider {
  generate(data: any, expiresTimeSeconds = 60): string {
    return jwt.sign(data, process.env.JWT_SECRET as string, {
      expiresIn: `${expiresTimeSeconds}s`,
    });
  }

  decode<T>(token: string): Promise<null | T> {
    return new Promise((resolve) => {
      try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as T;
        resolve(decoded);
      } catch (error) {
        console.log(error);
        resolve(null);
      }
    });
  }
}
