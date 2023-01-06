import 'express';
import { User } from '../entities/User';

declare global {
  namespace Express {
    export interface Request {
      user?: Pick<User, 'id' | 'username'>
    }
  }
}
