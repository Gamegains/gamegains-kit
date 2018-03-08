import { IUnitParameter } from './unit-parameter';

export interface IGameUnit {
  getName(): string;
  getDescription(): string;
  getId(): string;
  getParameters(): IUnitParameter[];
  calculateScore(): Promise<number>;
}
