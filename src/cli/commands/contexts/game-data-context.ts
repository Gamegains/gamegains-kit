import { Context } from 'clime';
import * as Inquirer from 'inquirer';

export class GameDataContext extends Context {
  // noinspection JSMethodCanBeStatic
  public promptForData(): Promise<Inquirer.Answers> {
    const regex = /^[_A-z0-9]*((-|\s)*[_A-z0-9])*$/;
    const filter = (answer: string) => answer.trim();

    // noinspection TsLint
    return Inquirer.prompt([
      {
        message: 'Name of Game',
        name: 'name',
        type: 'input',
        filter,
        validate: answer => answer.length > 3 && regex.test(answer),
      },

      {
        message: 'Game Description',
        name: 'description',
        type: 'input',
        filter,
        validate: answer => answer.length > 10 && regex.test(answer),
      },

      {
        message: 'Developer Key',
        name: 'developerKey',
        type: 'input',
        filter,
        validate: answer => answer.length === 20,
      },

      {
        message: 'Developer Secret',
        name: 'developerSecret',
        type: 'password',
        filter,
        validate: answer => answer.length === 40,
      },
    ]);
  }
}
