import { withProps } from 'recompose';
import { IGame } from '../interfaces';

export const withGame = (game: IGame) => withProps({ game });
