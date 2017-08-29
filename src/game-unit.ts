import { IGameUnit, IUnitParameter } from './interfaces';

export class GameUnit implements IGameUnit {
  private name: string;
  private description?: string;
  private id?: string;
  private parameters: IUnitParameter[];
}
