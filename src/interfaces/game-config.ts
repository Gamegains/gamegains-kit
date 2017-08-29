import { AuthTypes } from '../enums';
import { GameUnit } from '../game-unit';

export interface IGameConfig {
  name: string;
  description: string;
  id?: string;
  creatorKey: string;
  distributorKey: string;
  logo?: string;
  gameUnits: GameUnit[];
  authOptions: AuthTypes[];
}
