import { Context } from 'clime';
import * as Inquirer from 'inquirer';

export class GameDataContext extends Context {
  // noinspection JSMethodCanBeStatic
  public promptForData(): Promise<object> {
    return Inquirer.prompt([
      {
        message: `What's the name of your game?`,
        name: 'name',
        type: 'input',
        validate: answer => answer.length > 3,
      },
    ]);
  }
}
