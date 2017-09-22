import {CommanderStatic} from "commander";
import {ICommand} from "../interfaces/command";
import {ICommandConfig} from "../interfaces/command-config";

export abstract class Command implements ICommand {
  private readonly program: CommanderStatic;
  private readonly signature: string;
  private readonly description: string;
  private readonly regExp: RegExp;
  private readonly defaultValue: string;

  constructor(settings: ICommandConfig) {
    this.program = settings.program;
    this.signature = settings.signature;
    this.description = settings.description;
  }

  public getProgram(): object {
    return this.program;
  }

  public getSignature(): string {
    return this.signature;
  }

  public getDescription(): string {
    return this.description;
  }

  public getRegExp(): RegExp {
    return this.regExp;
  }

  public getDefaultValue(): string {
    return this.defaultValue;
  }

  public abstract execute(...args: any[]): any;

  public build(): void {
    this.program.option(this.signature, this.description, this.regExp, this.defaultValue);
    this.program.action(this.execute);
  }
}
