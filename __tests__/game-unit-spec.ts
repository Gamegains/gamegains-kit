import { Match } from '../examples/units';
import { Game, GameUnit } from '../src';

const gameUnitInstance: GameUnit = new Match();

describe('GameUnit type', () => {
  test('getters', () => {
    expect(gameUnitInstance.getName()).toBe('Match');
    expect(gameUnitInstance.getDescription().length).toBeGreaterThan(0);
    expect(gameUnitInstance.getId()).toBe('match');
  });

  test('static methods', () => {
    expect(Game.initType<GameUnit>(Match)[0]).toBeInstanceOf(GameUnit);
    expect(Game.initType<GameUnit>([Match])[0]).toBeInstanceOf(GameUnit);
  });

  test('revenue calculation', async () => {
    expect.assertions(3);

    await expect(gameUnitInstance.calculateScore()).resolves.toBeDefined();
    await expect(gameUnitInstance.calculateScore()).resolves.not.toBeNaN();
    await expect(
      gameUnitInstance.calculateScore()
    ).resolves.toBeGreaterThanOrEqual(0);
  });
});
