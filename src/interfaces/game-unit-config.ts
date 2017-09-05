import { IUnitParameter } from './unit-parameter';

export interface IGameUnitConfig {
  name: string;
  description: string;
  id?: string;
  parameters: IUnitParameter[];
}
