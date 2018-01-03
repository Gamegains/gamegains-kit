import { spawn } from 'child_process';
import { Command, command, metadata } from 'clime';
import { renameSync } from 'fs';
import { Answers } from 'inquirer';
import { camelCase, endsWith, kebabCase, upperFirst } from 'lodash';
import { render } from 'mustache';
import * as ora from 'ora';
import * as Path from 'path';
import * as recursiveReaddir from 'recursive-readdir';
import * as Scaffold from 'scaffold-generator';
import { promisify } from 'util';
import { GameDataContext } from '../contexts/game-data-context';

const readdir: any = promisify(recursiveReaddir);
const path = Path.resolve(__dirname, '../../../../templates/game');

@command()
export default class extends Command {
  @metadata
  public async execute(context: GameDataContext): Promise<any> {
    const gameData: Answers = await context.promptForData();

    const spinner = ora();

    spinner.start('Generating game structure');

    await new Scaffold({
      data: {
        className: upperFirst(camelCase(gameData.name)),
        packageName: `gamegains-${kebabCase(gameData.name)}`,
        ...gameData,
      },
      render,
    }).copy(path, context.cwd);

    spinner.succeed('Done generating game structure');

    spinner.start('Installing required packages');

    const files = ((await readdir(context.cwd)) as string[])
      .filter(file => endsWith(file, '.mustache'))
      .forEach(file => renameSync(file, file.replace('.mustache', '')));

    const packageInstaller = spawn('npm', ['install'], {
      cwd: context.cwd,
    });

    packageInstaller.on('exit', (code, signal) => {
      spinner.succeed('Done installing required packages');
    });
  }
}
