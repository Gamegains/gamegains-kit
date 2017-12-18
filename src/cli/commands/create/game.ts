import { Command, command, metadata } from 'clime';
import { Answers } from 'inquirer';
import { render } from 'mustache';
import * as Path from 'path';
import * as Scaffold from 'scaffold-generator';
import { AuthTypes } from '../../../index';
import { IGameConfig } from '../../../interfaces';
import { GameDataContext } from '../contexts/game-data-context';

const path = Path.resolve(__dirname, '../../../../templates/game');

@command()
export default class extends Command {
  @metadata
  public async execute(context: GameDataContext): Promise<any> {
    const gameData: Answers = await context.promptForData();

    const { account, key, secret } = gameData;

    // noinspection TsLint
    const gameConfig: IGameConfig = {
      name: gameData.name as string,

      description: gameData.description as string,

      creatorKey: this.isCreator(account) && key,
      creatorSecret: this.isCreator(account) && secret,

      distributorKey: !this.isCreator(account) && key,
      distributorSecret: !this.isCreator(account) && secret,

      // TODO: Update to match user input
      gameUnits: [],
      authTypes: [AuthTypes.LOGIN, AuthTypes.CODE],
    };

    // noinspection TsLint
    console.log(gameData);

    return Promise.resolve();

    // await new Scaffold({
    //   data: {
    //     gameName: gameData,
    //   },
    //   render,
    // }).copy(path, context.cwd);
    //
    // // noinspection TsLint
    // console.log('Copying done.');
  }

  private isCreator(account) {
    return account === 'creator';
  }
}
