import { IGameConfig } from "./game-config";

export interface IGame extends IGameConfig {
    authenticate(): void;
}