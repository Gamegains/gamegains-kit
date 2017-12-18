import { Command, command, metadata } from 'clime';
import { Answers } from 'inquirer';
import { camelCase, kebabCase, upperFirst } from 'lodash';
import { render } from 'mustache';
import * as Path from 'path';
import * as Scaffold from 'scaffold-generator';
import { IGameConfig } from '../../../interfaces';
import { GameDataContext } from '../contexts/game-data-context';

const path = Path.resolve(__dirname, '../../../../templates/game');

@command()
export default class extends Command {
  @metadata
  public async execute(context: GameDataContext): Promise<any> {
    const gameData: Answers = await context.promptForData();

    await new Scaffold({
      data: {
        className: upperFirst(camelCase(gameData.name)),
        packageName: 'gg-' + kebabCase(gameData.name),
        ...gameData,
      },
      render,
    }).copy(path, context.cwd);

    // noinspection TsLint
    console.log('Copying done.');
  }
}
