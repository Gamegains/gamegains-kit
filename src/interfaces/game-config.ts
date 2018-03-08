import { AuthTypes } from '../enums';
import { Field, GameUnit } from '../types';

export interface IGameConfig {
  name: string;
  description: string;
  id?: string;
  databaseId?: string;
  developerKey: string;
  developerSecret: string;
  logo?: string;
  gameUnits: GameUnit[];
  authTypes: AuthTypes[];
  requiredFields: Field[];
  dataFields?: Field[];
  verificationFields?: Field[];
}
