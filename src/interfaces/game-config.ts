import { AuthTypes } from '../enums';
import { GameUnit } from '../types/game-unit';

export interface IGameConfig {
  name: string;
  description: string;
  id?: string;
  developerKey: string;
  developerSecret: string;
  logo?: string;
  gameUnits: GameUnit[];
  authTypes: AuthTypes[];
}
