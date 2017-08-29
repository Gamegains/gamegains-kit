import { AuthStatus } from '../enums';
import { IAuthResult } from '../interfaces';

export class AuthResult implements IAuthResult {
  public static get METHOD_NOT_IMPLEMENTED(): Promise<IAuthResult> {
    return new Promise<IAuthResult>(resolve =>
      resolve(
        new AuthResult(
          AuthStatus.AUTH_NOT_IMPLEMENTED,
          'Authentication method not implemented.'
        )
      )
    );
  }

  private status: AuthStatus;
  private message: string;

  constructor(status: AuthStatus, message?: string) {
    this.status = status;
    this.message = message;
  }

  public getStatus(): AuthStatus {
    return this.status;
  }

  public getMesspge(): string {
    return this.message;
  }
}
