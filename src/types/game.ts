import { IAuthResult, IGame, IGameConfig } from '../interfaces';

import { chain, find, kebabCase, uniqBy } from 'lodash';
import { AuthTypes } from '../enums';
import { Field } from './field';
import { GameUnit } from './game-unit';

export abstract class Game implements IGame {
  protected static initType<T>(unitArray: any, ...units: T[]): T[] {
    if (Array.isArray(unitArray)) {
      return Game.initType.apply(this, unitArray);
    }

    const fullArray: T[] = units || [];
    fullArray.unshift(unitArray);

    return fullArray.map((typeInstance: any) => new typeInstance());
  }

  private static initFields(fields: Field[]): Field[] {
    return (uniqBy(fields, Field.byId) as Field[]) || [];
  }

  private readonly name: string;
  private readonly description: string;
  private readonly id?: string;
  private readonly logo?: string;
  private readonly developerKey: string;
  private readonly developerSecret: string;
  private readonly gameUnits: GameUnit[];

  private defaultAuthOption: AuthTypes;
  private readonly authTypes: AuthTypes[];

  private readonly requiredFields: Field[];
  private readonly dataFields: Field[];
  private readonly verificationFields: Field[];

  constructor(settings: IGameConfig) {
    this.name = settings.name;
    this.description = settings.description;
    this.developerKey = settings.developerKey;

    this.id = settings.id || kebabCase(settings.name);

    this.developerKey = settings.developerKey;
    this.developerSecret = settings.developerSecret;

    this.gameUnits = settings.gameUnits || [];
    this.authTypes = settings.authTypes || [];

    this.requiredFields = Game.initFields(settings.requiredFields);
    this.dataFields = Game.initFields(settings.dataFields);
    this.verificationFields = Game.initFields(settings.verificationFields);

    this.defaultAuthOption = this.authTypes[0];
  }

  public getName(): string {
    return this.name;
  }

  public getDescription(): string {
    return this.description;
  }

  public getId(): string {
    return this.id;
  }

  public getLogo(): string {
    return this.logo;
  }

  public getDeveloperKey(): string {
    return this.developerKey;
  }

  public getDeveloperSecret(): string {
    return this.developerSecret;
  }

  public getGameUnits(): GameUnit[] {
    return this.gameUnits;
  }

  // TODO: Check necessity of AuthTypes
  public getAuthTypes(): AuthTypes[] {
    return this.authTypes;
  }

  public getDefaultAuthType(): AuthTypes {
    return this.authTypes[0];
  }

  public setDefaultAuthType(type: AuthTypes): void {
    const index = this.authTypes.indexOf(type);
    this.authTypes.splice(index, 1);
    this.authTypes.unshift(1);
  }

  public getRequiredFields(): Field[] {
    return this.requiredFields;
  }

  public getDataFields(): Field[] {
    return this.dataFields;
  }

  public getVerificationFields(): Field[] {
    return this.verificationFields;
  }

  public getFieldValue(id: string): string {
    return this.getFieldById(id).getValue();
  }

  public setFieldValue(id: string, value: string): void {
    this.getFieldById(id).setValue(value);
  }

  public abstract generateVerificationValues(): Promise<void>;

  public abstract verifyPlayer(): Promise<IAuthResult>;

  private getFieldById(id: string): Field {
    const fields = this.requiredFields
      .concat(this.dataFields)
      .concat(this.verificationFields);
    return chain(fields)
      .uniqBy(Field.byId)
      .find((field: any) => field.getId() === id)
      .value() as Field;
  }
}
