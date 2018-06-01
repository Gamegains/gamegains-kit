import { IUnitParameter } from './unit-parameter';

export interface IGameUnit {
  getName(): string;
  getDescription(): string;
  getId(): string;
  getParameters(): IUnitParameter[];
  getParameterValue(id: string): string;
  setParameterValue(id: string, value: string): void;
  calculateScore(): Promise<number>;
}
