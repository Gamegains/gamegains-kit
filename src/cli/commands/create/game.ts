import {Command, command, metadata} from 'clime';

@command()
export default class extends Command {
  @metadata
  public execute(): string {
    return 'gamegains > create > game';
  }
}
