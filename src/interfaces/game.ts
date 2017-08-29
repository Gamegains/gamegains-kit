import {AuthTypes} from "../auth-types";
import {GameUnit} from "../game-unit";

export interface IGame {
  getName(): string;
  getDescription(): string;
  getId(): string;
  getCreatorKey(): string;
  getDistributorKey(): string;
  getGameUnits(): GameUnit[];
  getAuthOptions(): AuthTypes[];
  getLogo(): string;
  authenticate(): void;
}
