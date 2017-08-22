import { AuthTypes } from './auth-types';
import { GameUnit } from './game-unit';
import { IGameConfig } from './interfaces';
import { kebabCase } from 'lodash';

export abstract class Game {
  private name: string;
  private description: string;
  private id?: string;
  private creatorKey: string;
  private distributorKey: string;
  private gameUnits: GameUnit[];
  private authOptions: AuthTypes[];

  private logo?: string;

  constructor(settings: IGameConfig) {
    this.name = settings.name;
    this.description = settings.description;
    this.creatorKey = settings.creatorKey;

    this.id = settings.id || kebabCase(settings.name);

    this.creatorKey = settings.creatorKey || settings.distributorKey;
    this.distributorKey = this.distributorKey || settings.creatorKey;
  }

  public authenticate() {}

  public authenticateWithLogin() {}

  public authenticateWithCode() {}
}
