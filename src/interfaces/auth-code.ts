export interface IAuthCode {
  getCode(): string;
  getExpiration(): Date;
  hasExpired(): boolean;
}
