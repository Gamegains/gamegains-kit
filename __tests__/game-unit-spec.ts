import { Match } from '../examples/units';
import { GameUnit } from '../src/types';

const gameUnitInstance: GameUnit = new Match();

describe('GameUnit type', () => {
  test('getters', () => {
    expect(gameUnitInstance.getName()).toBe('Match');
    expect(gameUnitInstance.getDescription().length).toBeGreaterThan(0);
    expect(gameUnitInstance.getId()).toBe('match');
    expect(gameUnitInstance.getParameters().length).toBe(0);
  });

  test('static methods', () => {
    expect(GameUnit.initUnits(Match)[0]).toBeInstanceOf(GameUnit);
    expect(GameUnit.initUnits([Match])[0]).toBeInstanceOf(GameUnit);
  });
});
