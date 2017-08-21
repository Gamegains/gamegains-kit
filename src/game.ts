import { IGameConfig } from './game-config';

export abstract class Game {
  private name: string;
  private description: string;

  constructor(settings: IGameConfig) {
    this.name = settings.name;
    this.description = settings.description;
  }
}
