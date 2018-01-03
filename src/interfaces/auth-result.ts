import { AuthStatus } from '../enums';

export interface IAuthResult {
  getStatus(): AuthStatus;
  getMessage?(): string;
}
