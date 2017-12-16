import { Context } from 'clime';
import * as Inquirer from 'inquirer';

export class GameDataContext extends Context {
  // noinspection JSMethodCanBeStatic

  public promptForData(): Promise<object> {
    return Inquirer.prompt([
      {
        message: 'Name of Game',
        name: 'name',
        type: 'input',
        validate: answer => answer.length > 3,
      },

      {
        message: 'Game Description',
        name: 'name',
        type: 'input',
        validate: answer => answer.length > 10,
      },

      {
        message: 'Game Description',
        name: 'name',
        type: 'input',
        validate: answer => answer.length > 10,
      },
    ]);
  }
}
