import { kebabCase } from 'lodash';
import { IGameUnit, IGameUnitConfig, IUnitParameter } from '../interfaces';

export abstract class GameUnit implements IGameUnit {
  private readonly name: string;
  private readonly description?: string;
  private readonly id?: string;
  private readonly parameters: IUnitParameter[];

  constructor(settings: IGameUnitConfig) {
    this.name = settings.name;
    this.description = settings.description;

    this.id = settings.id || kebabCase(settings.name);

    this.parameters = settings.parameters || [];
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

  public getParameters(): IUnitParameter[] {
    return this.parameters;
  }

  public abstract calculateRevenue(): Promise<number>;
}
