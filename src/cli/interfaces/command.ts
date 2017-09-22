export interface ICommand {
  getProgram(): object;
  getSignature(): string;
  getDescription(): string;
  getRegExp(): string;
  getDefaultValue(): string;
  execute(...args: any[]): any;
  build(): void;
}
