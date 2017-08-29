import { AuthTypes } from '../enums';
import { GameUnit } from '../types/game-unit';

export interface IGame {
  getName(): string;
  getDescription(): string;
  getId(): string;
  getCreatorKey(): string;
  getDistributorKey(): string;
  getGameUnits(): GameUnit[];
  getAuthOptions(): AuthTypes[];
  getLogo(): string;
  authenticate(): void;
}
