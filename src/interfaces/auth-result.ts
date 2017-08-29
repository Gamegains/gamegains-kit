import {AuthStatus} from "./auth-status";

export interface IAuthResult {
  status: AuthStatus;
  message?: string;
}
