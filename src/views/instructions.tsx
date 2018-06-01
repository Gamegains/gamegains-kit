import * as React from 'react';
import {IGame} from "../interfaces";

export interface IInstructionsProps {
  game: IGame
}

// export class Instructions extends React.PureComponent<IInstructionsProps, {}> {
//   public render() {
//     const {game} = this.props;

//     return (
//       <p>{game.getInstructionMessage()}</p>
//     );
//   }
// }
