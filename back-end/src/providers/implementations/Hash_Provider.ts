import bcrypt from 'bcrypt';
import { IHash_Provider } from "../IHash_Provider";

export class Hash_Provider implements IHash_Provider {
  private saltRounds: number;

  constructor() {
    this.saltRounds = 10;
  }

  async compare(text: string, hash: string): Promise<boolean> {
    return bcrypt.compare(text, hash);
  }

  async encrypt(text: string): Promise<string> {
    return bcrypt.hash(text, this.saltRounds);
  }
}