import {IAuthResult, IField, IGame, IGameConfig} from '../interfaces';

import {camelCase, chain, kebabCase, uniqBy} from 'lodash';
import * as React from 'react';
import {AuthTypes} from '../enums';
import {Instructions, withGame} from '../views';
import {Field} from './field';
import {GameUnit} from './game-unit';

export abstract class Game implements IGame {
  public static initType<T>(unitArray: any, ...units: T[]): T[] {
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
  private readonly databaseId?: string;
  private readonly logo?: string;
  private readonly developerKey: string;
  private readonly developerSecret: string;
  private readonly gameUnits: GameUnit[];

  private defaultAuthOption: AuthTypes;

  private readonly instructionMessage: string;

  private readonly authTypes: AuthTypes[];
  private readonly requiredFields: IField[];
  private readonly dataFields: IField[];

  private readonly verificationFields: IField[];

  constructor(settings: IGameConfig) {
    this.name = settings.name;
    this.description = settings.description;
    this.developerKey = settings.developerKey;

    this.id = settings.id || kebabCase(settings.name);
    this.databaseId = settings.databaseId || camelCase(settings.name);

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

  public getDatabaseId(): string {
    return this.databaseId;
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

  public getInstructionMessage(): string {
    return this.instructionMessage;
  }

  public getInstructions(): React.PureComponent | React.Component {
    return withGame(this)(Instructions);
  }

  public getRequiredFields(): IField[] {
    return this.requiredFields;
  }

  public getDataFields(): IField[] {
    return this.dataFields;
  }

  public getVerificationFields(): IField[] {
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

  private getFieldById(id: string): IField {
    const fields = this.requiredFields
      .concat(this.dataFields)
      .concat(this.verificationFields);
    return chain(fields)
      .uniqBy(Field.byId)
      .find((field: any) => field.getId() === id)
      .value() as Field;
  }
}
