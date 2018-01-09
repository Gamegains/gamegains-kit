import * as React from 'react';
import {AuthTypes} from '../enums';
import {IAuthResult, IField} from '../interfaces';
import {GameUnit} from '../types';

export interface IGame {
  getName(): string;
  getDescription(): string;
  getId(): string;
  getDatabaseId(): string;
  getDeveloperKey(): string;
  getGameUnits(): GameUnit[];
  getAuthTypes(): AuthTypes[];
  getLogo(): string;
  getInstructionMessage(): string;
  getInstructions(): React.PureComponent | React.Component;
  getRequiredFields(): IField[];
  getDataFields(): IField[];
  getVerificationFields(): IField[];
  generateVerificationValues(): Promise<void>;
  verifyPlayer(): Promise<IAuthResult>;
}
