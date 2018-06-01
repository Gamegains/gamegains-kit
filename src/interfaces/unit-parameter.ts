export interface IUnitParameter {
  getName(): string;
  getDescription?(): string;
  getId?(): string;
  getWeight(): number;
  getValue(data: any): Promise<number>;
}
