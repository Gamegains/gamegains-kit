import {
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
    return AuthResult.METHOD_NOT_IMPLEMENTED;
  }
}

const gameInstance: Game = new LeagueOfLegends();

test('Game type getters are working properly', () => {
  expect(gameInstance.getName()).toBe('League of Legends');
  expect(gameInstance.getDescription().length).toBeGreaterThan(0);
  expect(gameInstance.getAuthTypes().length).not.toBe(0);
  expect(gameInstance.getGameUnits().length).toBe(0);
  expect(gameInstance.getLogo()).toBeUndefined();
});

test('Should Game type auth type methods correctly change instance', () => {
  expect(gameInstance.getDefaultAuthType()).toBe(AuthTypes.LOGIN);
  gameInstance.setDefaultAuthType(AuthTypes.CODE);
  expect(gameInstance.getDefaultAuthType()).toBe(AuthTypes.CODE);
});
