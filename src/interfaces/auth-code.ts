import { IAuthResult } from './auth-result';

export interface IAuthCode extends IAuthResult {
  getCode(): string;
  getExpiration(): Date;
  hasExpired(): boolean;
}
