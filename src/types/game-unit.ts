import { kebabCase } from 'lodash';
import { IGameUnit, IGameUnitConfig } from '../interfaces';
import { UnitParameter } from './unit-parameter';

export abstract class GameUnit implements IGameUnit {
  private readonly name: string;
  private readonly description?: string;
  private readonly id?: string;
  private readonly publicParameters?: UnitParameter[];

  constructor(settings: IGameUnitConfig) {
    this.name = settings.name;
    this.description = settings.description;

    this.id = settings.id || kebabCase(settings.name);

    this.publicParameters = settings.publicParameters || [];
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

  public getPublicParameters(): UnitParameter[] {
    return this.publicParameters;
  }

  public abstract calculateScore(): Promise<number>;
}
