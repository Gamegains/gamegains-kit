import { IAuthCode } from '../interfaces';

export class AuthCode implements IAuthCode {
  private code: string;
  private expiration: Date;

  private static get pastDate(): Date {
    const date = new Date();
    date.setFullYear(1999);
    return date;
  }

  constructor(code: string, expiration: Date = AuthCode.pastDate) {
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
