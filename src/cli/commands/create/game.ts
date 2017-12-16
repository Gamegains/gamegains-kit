import { Command, command, metadata } from 'clime';
import { GameDataContext } from '../contexts/game-data-context';

@command()
export default class extends Command {
  @metadata
  public execute(context: GameDataContext): Promise<string> {
    return Promise.resolve(context.cwd);
  }
}
