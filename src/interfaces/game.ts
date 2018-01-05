import { AuthTypes } from '../enums';
import { IAuthResult } from '../interfaces';
import { Field, GameUnit } from '../types';

export interface IGame {
  getName(): string;
  getDescription(): string;
  getId(): string;
  getDeveloperKey(): string;
  getGameUnits(): GameUnit[];
  getAuthTypes(): AuthTypes[];
  getLogo(): string;
  getVerificationFields(): Field[];
  verifyPlayer(): Promise<IAuthResult>;
}
