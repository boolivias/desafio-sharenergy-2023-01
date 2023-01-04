export interface IToken_Provider {
  generate(data: any, expiresTimeSeconds?: number): string,
  decode<T>(token: string): Promise<null | T>,
}
