import {
  AuthCode,
  AuthResult,
  AuthTypes,
  Game,
  IAuthCode,
  IAuthResult,
  IGame,
  IGameConfig,
} from '../src';

class LeagueOfLegends extends Game implements IGame {
  // noinspection TsLint
  private static GAME_CONFIG: IGameConfig = {
    name: 'League of Legends',

    description:
      'League of Legends (abbreviated LoL) is a multiplayer ' +
      'online battle arena video game developed and published ' +
      'by Riot Games for Microsoft Windows and macOS.',

    // Randomly generated with https://www.random.org
    creatorKey: 'ZV1eOrQ8VzbcT7pOfryh',
    distributorKey: '837EBP7nm4ynukGouqSE',

    gameUnits: [],
    authTypes: [AuthTypes.LOGIN, AuthTypes.CODE],
  };

  constructor() {
    super(LeagueOfLegends.GAME_CONFIG);
  }

  protected authenticateWithLogin(): Promise<IAuthResult> {
    return AuthResult.METHOD_NOT_IMPLEMENTED;
  }

  protected authenticateWithCode(): Promise<IAuthCode | IAuthResult> {
    return new Promise<IAuthCode>(resolve => {
      setTimeout(() => {
        resolve(new AuthCode('9794946180'));
      }, 500);
    });
  }
}

const gameInstance: Game = new LeagueOfLegends();

test('Game type getters', () => {
  expect(gameInstance.getName()).toBe('League of Legends');
  expect(gameInstance.getDescription().length).toBeGreaterThan(0);
  expect(gameInstance.getId()).toBe('league-of-legends');
  expect(gameInstance.getCreatorKey().length).toBeGreaterThanOrEqual(20);
  expect(gameInstance.getDistributorKey().length).toBeGreaterThanOrEqual(20);
  expect(gameInstance.getAuthTypes().length).not.toBe(0);
  expect(gameInstance.getGameUnits().length).toBe(0);
  expect(gameInstance.getLogo()).toBeUndefined();
});

test('Game type authenticate methods', async () => {
  expect.assertions(2);

  await expect(
    gameInstance.authenticate(AuthTypes.LOGIN)
  ).rejects.toMatchObject(AuthResult.METHOD_NOT_IMPLEMENTED);

  await expect(
    gameInstance.authenticate(AuthTypes.CODE)
  ).resolves.toBeDefined();
});

test('Game type auth type methods', () => {
  expect(gameInstance.getDefaultAuthType()).toBe(AuthTypes.LOGIN);
  gameInstance.setDefaultAuthType(AuthTypes.CODE);
  expect(gameInstance.getDefaultAuthType()).toBe(AuthTypes.CODE);
});
