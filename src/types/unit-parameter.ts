import { kebabCase } from 'lodash';
import { IUnitParameter, IUnitParameterConfig } from '../interfaces';

export abstract class UnitParameter implements IUnitParameter {
  private readonly name: string;
  private readonly description: string;
  private readonly id: string;
  private readonly weight: number;
  private value: any;

  constructor(settings: IUnitParameterConfig) {
    this.name = settings.name;
    this.description = settings.description;

    this.id = settings.id || kebabCase(settings.name);

    this.weight = settings.weight;
  }

  public getName(): string {
    return this.name;
  }

  public getDescription(): string {
    return this.description;
  }

  public getId(): string {
    return this.id;
  }

  public getWeight(): number {
    return this.weight;
  }

  public getValue(): any {
    return this.value;
  }

  public setValue(value: any): void {
    this.value = value;
  }
}
