import { IField } from '../interfaces';

export class Field implements IField {
  public static byId(field: IField | Field): string {
    return field.getId();
  }

  protected readonly id: string;
  protected readonly displayName: string;

  protected value: string;

  constructor(id: string, displayName: string) {
    this.id = id;
    this.displayName = displayName;
  }

  public getId(): string {
    return this.id;
  }

  public getDisplayName(): string {
    return this.displayName;
  }

  public getValue(): string {
    return this.value;
  }

  public setValue(value: string): void {
    this.value = value;
  }
}
