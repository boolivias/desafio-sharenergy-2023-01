export interface IHash_Provider {
  encrypt(text: string): Promise<string>,
  compare(text: string, hash: string): Promise<boolean>,
}