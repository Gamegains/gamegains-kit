import * as React from 'react';
import { AuthTypes } from '../enums';
import { IAuthResult, IField, IGameUnit } from '../interfaces';
import { GameUnit } from '../types';

export interface IGame {
  getName(): string;
  getDescription(): string;
  getId(): string;
  getDatabaseId(): string;
  getDeveloperKey(): string;
  getGameUnits(): GameUnit[];
  getAuthTypes(): AuthTypes[];
  getLogo(): string;
  // getInstructionMessage(): string;
  // getInstructions(): React.PureComponent | React.Component;
  getRequiredFields(): IField[];
  getDataFields(): IField[];
  getVerificationFields(): IField[];
  getFieldValue(id: string): string;
  setFieldValue(id: string, value: string): void;
  generateVerificationValues(): Promise<void>;
  verifyPlayer(): Promise<IAuthResult>;
  getLatestUnits(gameUnit: IGameUnit): Promise<IGameUnit[]>;
}
