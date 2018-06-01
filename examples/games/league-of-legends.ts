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

declare var Promise: any;

export class LeagueOfLegends extends Game implements IGame {
  private static readonly GAME_CONFIG: IGameConfig = {
    name: 'League of Legends',

    databaseId: 'lol',

    description:
      'League of Legends (abbreviated LoL) is a multiplayer ' +
      'online battle arena video game developed and published ' +
      'by Riot Games for Microsoft Windows and macOS.',

    // Randomly generated with LastPass
    developerKey: 'vtLF993sVqHFHN6W9z5c',
    developerSecret: 'M690prZo8nguTUuOAQygr52wSMvcwKO91lg9LsvU',

    gameUnits: Game.initType<GameUnit>(Match),
    authTypes: [AuthTypes.LOGIN, AuthTypes.CODE],

    requiredFields: [],
    dataFields: [],
    verificationFields: [],
  };

  constructor() {
    super(LeagueOfLegends.GAME_CONFIG);
  }

  public generateVerificationValues(): Promise<void> {
    return Promise.resolve();
  }

  public verifyPlayer(): Promise<IAuthResult> {
    return Promise.resolve(AuthResult.METHOD_NOT_IMPLEMENTED);
  }

  protected authenticateWithLogin(): Promise<IAuthResult> {
    return AuthResult.METHOD_NOT_IMPLEMENTED;
  }

  protected authenticateWithCode(): Promise<IAuthResult> {
    return Promise.resolve(new AuthCode('9794946180'));
  }
}
