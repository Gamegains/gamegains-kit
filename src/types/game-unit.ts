import { chain, kebabCase } from 'lodash';
import { IGameUnit, IGameUnitConfig, IUnitParameter } from '../interfaces';
import { UnitParameter } from './unit-parameter';

export abstract class GameUnit implements IGameUnit {
  private readonly name: string;
  private readonly description?: string;
  private readonly id?: string;
  private readonly parameters: UnitParameter[];

  constructor(settings: IGameUnitConfig) {
    this.id = settings.id || kebabCase(settings.name);
    this.name = settings.name;
    this.description = settings.description;

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

  public getParameterValue(id: string): string {
    return this.getParameterById(id).getValue();
  }

  public setParameterValue(id: string, value: string): void {
    this.getParameterById(id).setValue(value);
  }

  public getParameters(): IUnitParameter[] {
    return this.parameters;
  }

  public abstract calculateScore(): Promise<number>;

  private getParameterById(id: string): IUnitParameter {
    return chain(this.parameters)
      .uniqBy(UnitParameter.byId)
      .find((parameter: any) => parameter.getId() === id)
      .value() as IUnitParameter;
  }
}
