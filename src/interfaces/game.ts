import { IGameConfig } from './game-config';

export interface IGame {
  getName(): string;
  getDescription(): string;
  getId(): string;
  getCreatorKey(): string;
  getDistributorKey(): string;
  getLogo(): string;
  authenticate(): void;
}
