import {
  Game,
  GameUnit,
  IGameUnit,
  IGameUnitConfig,
  UnitParameter,
} from '../../src';
import { Kill } from '../unit-parameters';

export class Match extends GameUnit implements IGameUnit {
  // noinspection TsLint
  private static GAME_UNIT_CONFIG: IGameUnitConfig = {
    name: 'Match',
    description: 'Main game unit in League of Legends',
    parameters: Game.initType<UnitParameter>(Kill),
  };

  constructor() {
    super(Match.GAME_UNIT_CONFIG);
  }

  public calculateRevenue(): Promise<number> {
    return new Promise<number>((resolve, reject) => {
      const kill = new Kill();
      let revenue: number = 0;

      kill.getValue().then(value => {
        revenue = value * kill.getWeight();
        resolve(revenue);
      });
    });
  }
}
