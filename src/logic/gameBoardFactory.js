/* eslint-disable no-prototype-builtins */
import shipFactory from './shipFactory';

export default function gameBoardFactory() {
  const gameBoard = [
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', '', '', ''],
  ];

  const ships = {};

  const placeShipAt = (firstIndex, lastIndex, length, name) => {
    if (firstIndex == null || typeof firstIndex !== 'number')
      throw new Error('Invalid ship firstIndex');
    if (lastIndex == null || typeof lastIndex !== 'number')
      throw new Error('Invalid ship lastIndex');
    if (firstIndex > gameBoard.length || firstIndex < 0) return;
    if (lastIndex > gameBoard.length || lastIndex < 0) return;

    const ship = shipFactory(length, name);
    if (ships[ship.name] !== ship.name) ships[ship.name] = ship;

    for (let i = 0; i < lastIndex + 1; i += 1) {
      if (gameBoard[firstIndex][i] === '') {
        gameBoard[firstIndex][i] = ship.name;
      }
    }
  };

  const receiveAttack = (row, col) => {
    if (row == null || typeof row !== 'number')
      throw new Error('invalid row index/coordinate');
    if (col == null || typeof col !== 'number')
      throw new Error('invalid col index/coordinate');

    if (gameBoard[row][col] !== '') {
      ships[gameBoard[row][col]].hit();
      gameBoard[row][col] += 'x'; // ship name + x for hit ship's part
      return;
    }
    gameBoard[row][col] = 'x'; // letter X here for missed shots
  };

  const allAreSunk = () => {
    const areSunk = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const shipName in ships) {
      if (ships.hasOwnProperty(shipName)) {
        areSunk.push(ships[shipName].isSunk());
      }
    }
    return areSunk.every((statement) => statement === true);
  };

  return {
    gameBoard,
    placeShipAt,
    receiveAttack,
    allAreSunk,
  };
}
