import gameBoardFactory from './gameBoardFactory';
import Player from './player';

test('player name is set correctly', () => {
  const playerOne = Player('player one');
  expect(playerOne.name).toBe('player one');
  const computer = Player('computer');
  expect(computer.name).toBe('computer');
});

test('player humanAttack function works correctly', () => {
  const playerOne = Player('player one');
  const gameBoard = gameBoardFactory();
  gameBoard.placeShipAt([0, 0], [0, 0], 1, 'marine');
  playerOne.humanAttack(0, 0, gameBoard);
  expect(gameBoard.gameBoard[0][0]).toBe('marinex');
});

test('player humanAttack function handles unexpected inputs', () => {
  const playerOne = Player('player one');
  const gameBoard = gameBoardFactory();
  expect(() => playerOne.humanAttack('f', 0, gameBoard)).toThrow(
    'invalid row or col'
  );
  expect(() => playerOne.humanAttack(0, 'd', gameBoard)).toThrow(
    'invalid row or col'
  );
  expect(() => playerOne.humanAttack(0, 0)).toThrow('no gameBoard passed');
});

test('player computerAttack function works correctly', () => {
  const computer = Player('computer');
  const gameBoard = gameBoardFactory();
  computer.computerAttack(gameBoard);
  let changed = false;
  for (let i = 0; i < gameBoard.gameBoard.length; i += 1) {
    for (let j = 0; j < gameBoard.gameBoard[i].length; j += 1) {
      if (gameBoard.gameBoard[i][j] === 'x') changed = true;
    }
  }

  expect(changed).toBe(true);
});

test('player computerAttack function handles unexpected inputs', () => {
  expect(() => Player('computer').computerAttack()).toThrow(
    'no gameBoard passed'
  );
});
