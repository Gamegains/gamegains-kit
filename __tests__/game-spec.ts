import { AuthCode, AuthTypes, Game, GameUnit } from '../src';

import { LeagueOfLegends } from '../examples/games';

const gameInstance: Game = new LeagueOfLegends();

describe('Game type', () => {
  test('getters', () => {
    expect(gameInstance.getName()).toBe('League of Legends');
    expect(gameInstance.getDescription().length).toBeGreaterThan(0);
    expect(gameInstance.getId()).toBe('league-of-legends');
    expect(gameInstance.getDeveloperKey().length).toEqual(20);
    expect(gameInstance.getDeveloperSecret().length).toEqual(40);
    expect(gameInstance.getAuthTypes().length).not.toBe(0);
    expect(gameInstance.getGameUnits().length).toBe(1);
    expect(gameInstance.getGameUnits()[0]).toBeInstanceOf(GameUnit);
    expect(gameInstance.getGameUnits()[1]).toBeUndefined();
    expect(gameInstance.getLogo()).toBeUndefined();
  });

  test('authentication methods', async () => {
    expect.assertions(2);

    await expect(
      gameInstance.authenticate(AuthTypes.LOGIN)
    ).rejects.toHaveProperty('status');

    await expect(
      gameInstance.authenticate(AuthTypes.CODE)
    ).resolves.toBeInstanceOf(AuthCode);
  });

  test('AuthType methods', () => {
    expect(gameInstance.getDefaultAuthType()).toBe(AuthTypes.LOGIN);
    gameInstance.setDefaultAuthType(AuthTypes.CODE);
    expect(gameInstance.getDefaultAuthType()).toBe(AuthTypes.CODE);
  });
});
