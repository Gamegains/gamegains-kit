import { AuthTypes } from '../enums';
import { IAuthCode, IAuthResult } from '../interfaces';
import { GameUnit } from '../types';

export interface IGame {
  getName(): string;
  getDescription(): string;
  getId(): string;
  getCreatorKey(): string;
  getDistributorKey(): string;
  getGameUnits(): GameUnit[];
  getAuthTypes(): AuthTypes[];
  getLogo(): string;
  authenticate(): void;
}
