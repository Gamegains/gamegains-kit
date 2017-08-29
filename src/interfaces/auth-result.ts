import { AuthStatus } from '../enums';

export interface IAuthResult {
  status: AuthStatus;
  message?: string;
}
