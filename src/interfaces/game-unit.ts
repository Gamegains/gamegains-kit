import { UnitParameter } from '../types';

export interface IGameUnit {
  getName(): string;
  getDescription(): string;
  getId(): string;
  getPublicParameters(): UnitParameter[];
  calculateScore(): Promise<number>;
}
