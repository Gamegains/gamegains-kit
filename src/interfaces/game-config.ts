import { AuthTypes } from '../enums';
import { GameUnit } from '../types/game-unit';

export interface IGameConfig {
  name: string;
  description: string;
  id?: string;
  creatorKey: string;
  creatorSecret: string;
  distributorKey: string;
  distributorSecret: string;
  logo?: string;
  gameUnits: GameUnit[];
  authTypes: AuthTypes[];
}
