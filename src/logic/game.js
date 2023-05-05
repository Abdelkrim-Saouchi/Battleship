import gameBoardFactory from './gameBoardFactory';
import Player from './player';

export default function gameFactory() {
  const playerOne = Player('Human');
  const playerTwo = Player('Computer');
  const gameBoardOne = gameBoardFactory(); // for playerOne
  const gameBoardTwo = gameBoardFactory(); // for playerTwo

  // place ships of playerOne
  gameBoardOne.placeShipAt([0, 0], [0, 4], 5, 'currier');
  gameBoardOne.placeShipAt([9, 6], [9, 9], 4, 'battleship');
  gameBoardOne.placeShipAt([3, 0], [3, 2], 3, 'destroyer');
  gameBoardOne.placeShipAt([5, 3], [5, 4], 2, 'submarine');
  gameBoardOne.placeShipAt([7, 6], [7, 6], 1, 'patrol boat');

  // place ships of playerTwo
  gameBoardTwo.placeShipAt([0, 0], [0, 4], 5, 'currier');
  gameBoardTwo.placeShipAt([9, 6], [9, 9], 4, 'battleship');
  gameBoardTwo.placeShipAt([3, 0], [3, 2], 3, 'destroyer');
  gameBoardTwo.placeShipAt([5, 3], [5, 4], 2, 'submarine');
  gameBoardTwo.placeShipAt([7, 6], [7, 6], 1, 'patrol boat');
}
