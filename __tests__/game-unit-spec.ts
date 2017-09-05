import {GameUnit, IGameUnit, IGameUnitConfig} from "../src";

class Match extends GameUnit implements IGameUnit {
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

const gameUnitInstance = new Match();

describe('GameUnit type', () => {
  test('getters', () => {
    expect(gameUnitInstance.getName()).toBe('Match');
    expect(gameUnitInstance.getDescription().length).toBeGreaterThan(0);
    expect(gameUnitInstance.getId()).toBe('match');
    expect(gameUnitInstance.getParameters().length).toBe(0);
  });
});
