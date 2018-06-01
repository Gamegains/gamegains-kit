export interface IGameUnit {
  getName(): string;
  getDescription(): string;
  getId(): string;
  calculateScore(): Promise<number>;
}
