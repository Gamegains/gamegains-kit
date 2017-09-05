import { kebabCase } from 'lodash';
import { IUnitParameter, IUnitParameterConfig } from '../interfaces';

export class UnitParameter implements IUnitParameter {
  private readonly name: string;
  private readonly description: string;
  private readonly id: string;
  private readonly weight: number;

  constructor(settings: IUnitParameterConfig) {
    this.name = settings.name;
    this.description = settings.description;

    this.id = settings.id || kebabCase(settings.name);

    this.weight = settings.weight;
  }

  public getName(): string {
    throw new Error('Method not implemented.');
  }

  public getDescription(): string {
    throw new Error('Method not implemented.');
  }

  public getId(): string {
    throw new Error('Method not implemented.');
  }

  public getWeight(): number {
    throw new Error('Method not implemented.');
  }
}
