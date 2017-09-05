import { GameUnit, IGameUnit, IGameUnitConfig } from '../../src';

export class Match extends GameUnit implements IGameUnit {
  // noinspection TsLint
  private static GAME_UNIT_CONFIG: IGameUnitConfig = {
    name: 'Match',
    description: 'Main game unit in League of Legends',
    parameters: [],
  };

  constructor() {
    super(Match.GAME_UNIT_CONFIG);
  }
}
