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

  const placeShipAt = (start, end, length, name) => {
    if (start == null || !Array.isArray(start))
      throw new Error('Invalid ship start');
    if (end == null || !Array.isArray(end)) throw new Error('Invalid ship end');
    if (
      start[0] > gameBoard.length ||
      start[0] > gameBoard.length ||
      start[0] < 0 ||
      start[0] < 0
    )
      return;
    if (
      start[1] > gameBoard.length ||
      start[1] > gameBoard.length ||
      start[1] < 0 ||
      start[1] < 0
    )
      return;
    if (
      end[0] > gameBoard.length ||
      end[0] > gameBoard.length ||
      end[0] < 0 ||
      end[0] < 0
    )
      return;
    if (
      end[1] > gameBoard.length ||
      end[1] > gameBoard.length ||
      end[1] < 0 ||
      end[1] < 0
    )
      return;

    const ship = shipFactory(length, name);
    if (ships[ship.name] !== ship.name) ships[ship.name] = ship;

    if (start[0] === end[0] && start[1] !== end[1]) {
      for (let i = start[1]; i < end[1] + 1; i += 1) {
        if (gameBoard[start[0]][i] === '') {
          gameBoard[start[0]][i] = ship.name;
        }
      }
    } else if (start[1] === end[1] && start[0] !== end[0]) {
      for (let i = start[0]; i < end[0] + 1; i += 1) {
        if (gameBoard[start[1]][i] === '') {
          gameBoard[start[1]][i] = ship.name;
        }
      }
    } else {
      // eslint-disable-next-line no-lonely-if
      if (gameBoard[start[0]][start[0]] === '') {
        gameBoard[start[0]][start[0]] = ship.name;
      }
    }
  };

  const receiveAttack = (row, col) => {
    if (row == null || typeof row !== 'number')
      throw new Error('invalid row index/coordinate');
    if (col == null || typeof col !== 'number')
      throw new Error('invalid col index/coordinate');
    if (gameBoard[row][col] !== '' && gameBoard[row][col] !== 'x') {
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
