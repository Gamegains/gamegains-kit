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

  public getId() {
    return this.id;
  }

  public getDisplayName() {
    return this.displayName;
  }

  public getValue() {
    return this.value;
  }

  public setValue(value: string) {
    this.value = value;
  }
}
