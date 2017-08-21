import { IUnitParameter } from './unit-parameter';

export interface IGameUnit {
  name: string;
  description?: string;
  id?: string;
  parameters: IUnitParameter[];
}
