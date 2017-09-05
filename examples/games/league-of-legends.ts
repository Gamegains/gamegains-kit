import {
  AuthCode,
  AuthResult,
  AuthTypes,
  Game,
  GameUnit,
  IAuthResult,
  IGame,
  IGameConfig,
} from '../../src';

import { Match } from '../units';

export class LeagueOfLegends extends Game implements IGame {
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

    gameUnits: GameUnit.initUnits(Match),
    authTypes: [AuthTypes.LOGIN, AuthTypes.CODE],
  };

  constructor() {
    super(LeagueOfLegends.GAME_CONFIG);
  }

  protected authenticateWithLogin(): Promise<IAuthResult> {
    return AuthResult.METHOD_NOT_IMPLEMENTED;
  }

  protected authenticateWithCode(): Promise<IAuthResult> {
    return Promise.resolve(new AuthCode('9794946180'));
  }
}
