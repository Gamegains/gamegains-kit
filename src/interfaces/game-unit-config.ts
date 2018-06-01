import { IUnitParameter } from "./unit-parameter";

export interface IGameUnitConfig {
  id?: string;
  name: string;
  description: string;
  parameters: IUnitParameter[];
}
