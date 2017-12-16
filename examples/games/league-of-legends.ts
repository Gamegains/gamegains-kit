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
  // noinspection TsLint
  private static readonly GAME_CONFIG: IGameConfig = {
    name: 'League of Legends',

    description:
      'League of Legends (abbreviated LoL) is a multiplayer ' +
      'online battle arena video game developed and published ' +
      'by Riot Games for Microsoft Windows and macOS.',

    // Randomly generated with LastPass
    creatorKey: 'vtLF993sVqHFHN6W9z5c',
    creatorSecret: 'M690prZo8nguTUuOAQygr52wSMvcwKO91lg9LsvU',

    distributorKey: '3hZsWXNgC3g0bwd8tsFl',
    distributorSecret: 'oG56argjgI8ze0S5eb7UG2hwf1mW1vmPnaHIXdGU',

    gameUnits: Game.initType<GameUnit>(Match),
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
