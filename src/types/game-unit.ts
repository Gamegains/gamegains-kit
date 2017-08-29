import { IGameUnit, IUnitParameter } from '../interfaces';

export class GameUnit implements IGameUnit {
  private readonly name: string;
  private readonly description?: string;
  private readonly id?: string;
  private readonly parameters: IUnitParameter[];

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
}
