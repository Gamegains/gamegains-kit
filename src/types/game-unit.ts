import { kebabCase } from 'lodash';
import { IGameUnit, IGameUnitConfig } from '../interfaces';

export abstract class GameUnit implements IGameUnit {
  private readonly name: string;
  private readonly description?: string;
  private readonly id?: string;

  constructor(settings: IGameUnitConfig) {
    this.name = settings.name;
    this.description = settings.description;

    this.id = settings.id || kebabCase(settings.name);
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

  public abstract calculateScore(): Promise<number>;
}
