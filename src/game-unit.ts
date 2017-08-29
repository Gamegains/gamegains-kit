import { IGameUnit, IUnitParameter } from './interfaces';

export class GameUnit implements IGameUnit {
  private name: string;
  private description?: string;
  private id?: string;
  private parameters: IUnitParameter[];

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
