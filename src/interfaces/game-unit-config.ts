import { UnitParameter } from '../types';

export interface IGameUnitConfig {
  id?: string;
  name: string;
  description: string;
  parameters: UnitParameter[];
}
