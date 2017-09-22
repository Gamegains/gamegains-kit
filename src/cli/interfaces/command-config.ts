import {CommanderStatic} from "commander";

export interface ICommandConfig {
  program: CommanderStatic;
  signature: string;
  description: string;
}
