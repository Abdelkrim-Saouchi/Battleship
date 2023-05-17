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

  let ships = {};

  // method to remove more than one extra x
  const removeX = (string) => {
    if (string.length > 1 && string.includes('x')) {
      return string.slice(0, -1);
    }
    return string;
  };

  const placeShipAt = (start, end, length, name) => {
    if (start == null || !Array.isArray(start))
      throw new Error('Invalid ship start');
    if (end == null || !Array.isArray(end)) throw new Error('Invalid ship end');

    const [startRow, startCol] = start;
    const [endRow, endCol] = end;

    if (
      startRow > gameBoard.length ||
      startRow > gameBoard.length ||
      startRow < 0 ||
      startRow < 0
    )
      return;
    if (
      startCol > gameBoard.length ||
      startCol > gameBoard.length ||
      startCol < 0 ||
      startCol < 0
    )
      return;
    if (
      endRow > gameBoard.length ||
      endRow > gameBoard.length ||
      endRow < 0 ||
      endRow < 0
    )
      return;
    if (
      endCol > gameBoard.length ||
      endCol > gameBoard.length ||
      endCol < 0 ||
      endCol < 0
    )
      return;

    // create ship
    const ship = shipFactory(length, name);
    // add ship to ships obj to track added ships and prevent duplication
    if (!ships[ship.name]) ships[ship.name] = ship;

    // if horizontal with different cols
    if (startRow === endRow && startCol !== endCol) {
      for (let i = startCol; i < endCol + 1; i += 1) {
        if (gameBoard[startRow][i] === '') {
          gameBoard[startRow][i] = ship.name;
        }
      }
      // if vertical with different rows
    } else if (startCol === endCol && startRow !== endRow) {
      for (let i = startRow; i < endRow + 1; i += 1) {
        if (gameBoard[i][startCol] === '') {
          gameBoard[i][startCol] = ship.name;
        }
      }
      // if have same end row and end col
    } else if (startRow !== startCol && gameBoard[startRow][startCol] === '') {
      gameBoard[startRow][startCol] = ship.name;
      // if have same start row and start col
    } else if (startRow === startCol && gameBoard[startRow][startRow] === '') {
      gameBoard[startRow][startRow] = ship.name;
    }
  };

  const receiveAttack = (row, col) => {
    if (row == null || typeof row !== 'number')
      throw new Error('invalid row index/coordinate');
    if (col == null || typeof col !== 'number')
      throw new Error('invalid col index/coordinate');
    if (row > gameBoard.length - 1 || row < 0) return;
    if (col > gameBoard[0].length - 1 || col < 0) return;

    if (
      gameBoard[row][col] !== '' &&
      gameBoard[row][col] !== 'x' &&
      !gameBoard[row][col].includes('x')
    ) {
      ships[gameBoard[row][col]].hit();
      gameBoard[row][col] += 'x'; // ship name + x for hit ship's part
      return;
    }
    if (
      gameBoard[row][col] !== '' &&
      gameBoard[row][col] !== 'x' &&
      gameBoard[row][col].includes('x')
    ) {
      const shipName = removeX(gameBoard[row][col]);
      ships[shipName].hit();
      return;
    }
    gameBoard[row][col] = 'x'; // letter X here for missed shots
  };

  const fillAroundSunkShip = () => {
    for (let i = 0; i < gameBoard.length; i += 1) {
      for (let j = 0; j < gameBoard[i].length; j += 1) {
        if (ships[removeX(gameBoard[i][j])] == null) {
          // eslint-disable-next-line no-continue
          continue;
        } else if (ships[removeX(gameBoard[i][j])].isSunk()) {
          // try all possible attacks coordinates, invalid coordinates will be handled by receiveAttack()
          receiveAttack(i - 1, j);
          receiveAttack(i + 1, j);
          receiveAttack(i, j - 1);
          receiveAttack(i, j + 1);
          receiveAttack(i - 1, j - 1);
          receiveAttack(i + 1, j + 1);
          receiveAttack(i + 1, j - 1);
          receiveAttack(i - 1, j + 1);
        }
      }
    }
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

  const cleanGameBoard = () => {
    for (let i = 0; i < gameBoard.length; i += 1) {
      for (let j = 0; j < gameBoard[i].length; j += 1) {
        gameBoard[i][j] = '';
      }
    }
  };

  const cleanShips = () => {
    ships = {};
  };

  const isPlaceAlreadyHit = (row, col) => {
    if (gameBoard[row][col].includes('x')) {
      return true;
    }
    return false;
  };

  return {
    gameBoard,
    placeShipAt,
    receiveAttack,
    allAreSunk,
    fillAroundSunkShip,
    cleanGameBoard,
    cleanShips,
    isPlaceAlreadyHit,
  };
}
