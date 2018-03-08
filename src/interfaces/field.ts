export interface IField {
  getId(): string;
  getDisplayName(): string;
  getValue(): string;
  setValue(value: string): void;
}
