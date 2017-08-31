import { AuthStatus } from '../enums';
import { IAuthCode } from '../interfaces';
import { AuthResult } from './auth-result';

export class AuthCode extends AuthResult implements IAuthCode {
  private readonly code: string;
  private readonly expiration: Date;

  private static get pastDate(): Date {
    const date = new Date();
    date.setFullYear(1999);
    return date;
  }

  constructor(code: string, expiration: Date = AuthCode.pastDate) {
    super(AuthStatus.SUCCESS, 'Successfully generated authentication code.');
    this.code = code;
    this.expiration = expiration;
  }

  public getCode(): string {
    return this.code;
  }

  public getExpiration(): Date {
    return this.expiration;
  }

  public hasExpired(): boolean {
    return this.expiration < new Date();
  }
}
