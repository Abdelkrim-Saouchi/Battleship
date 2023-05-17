import gameBoardFactory from './gameBoardFactory';

let gameBoardObj;

beforeEach(() => {
  gameBoardObj = gameBoardFactory();
});

test('ship placed properly', () => {
  const firstShipIndex = [0, 0];
  const lastShipIndex = [0, 4];
  const shipLength = 5;
  gameBoardObj.placeShipAt(
    firstShipIndex,
    lastShipIndex,
    shipLength,
    'currier'
  );
  for (let i = 0; i < lastShipIndex + 1; i += 1) {
    expect(gameBoardObj.gameBoard[0][i]).toBe('currier');
  }

  gameBoardObj.placeShipAt([1, 0], [2, 0], 1, 'submarine');
  for (let i = 1; i < 3; i += 1) {
    expect(gameBoardObj.gameBoard[i][0]).toBe('submarine');
  }

  gameBoardObj.placeShipAt([3, 2], [3, 2], 1, 'patrol');
  for (let i = 2; i < 3; i += 1) {
    expect(gameBoardObj.gameBoard[3][i]).toBe('patrol');
  }
});

test('handling invalid first index and last index works', () => {
  expect(() =>
    gameBoardObj.placeShipAt(undefined, [0, 1], 5, 'currier')
  ).toThrow('Invalid ship start');
  expect(() => gameBoardObj.placeShipAt('ab', [0, 1], 5, 'currier'));
  expect(() =>
    gameBoardObj.placeShipAt([1, 0], undefined, 5, 'currier')
  ).toThrow('Invalid ship end');
  expect(() => gameBoardObj.placeShipAt([1, 0], 'ab', 5, 'currier')).toThrow(
    'Invalid ship end'
  );
});

test('handling misplacing ship works correctly', () => {
  const firstIndex = [0, 8];
  const lastIndex = [0, 13];
  const shipLength = 5;
  gameBoardObj.placeShipAt(firstIndex, lastIndex, shipLength, 'currier');
  for (let i = firstIndex; i < lastIndex - 3; i += 1) {
    expect(gameBoardObj.gameBoard[0][i]).toBe('');
  }
});

test('prevent placing new ship on existed ship', () => {
  gameBoardObj.placeShipAt([0, 0], [0, 4], 5, 'currier'); // old ship
  gameBoardObj.placeShipAt([0, 0], [0, 3], 4, 'BattleShip'); // new ship
  expect(gameBoardObj.gameBoard[0][0]).toBe('currier');
});

test('receiveAttack function works correctly', () => {
  gameBoardObj.placeShipAt([0, 0], [0, 4], 5, 'currier'); // ship placed at first index 0 to last index 4 with length of 5
  gameBoardObj.receiveAttack(0, 0); // attack received on indexes 0 / 0 => ship get hit
  expect(gameBoardObj.gameBoard[0][0]).toMatch(`currierx`);
  gameBoardObj.receiveAttack(0, 5); // attack miss ship
  expect(gameBoardObj.gameBoard[0][5]).toBe('x');
});

test('receiveAttack function handles errors and unexpected inputs', () => {
  expect(() => gameBoardObj.receiveAttack()).toThrow(
    'invalid row index/coordinate'
  );
  expect(() => gameBoardObj.receiveAttack('e', 2)).toThrow(
    'invalid row index/coordinate'
  );
  expect(() => gameBoardObj.receiveAttack(1)).toThrow(
    'invalid col index/coordinate'
  );
  expect(() => gameBoardObj.receiveAttack(1, 'abc')).toThrow(
    'invalid col index/coordinate'
  );
});

test('allAreSunk works correctly', () => {
  gameBoardObj.placeShipAt([0, 0], [0, 0], 1, 'submarine');
  gameBoardObj.receiveAttack(0, 0);
  expect(gameBoardObj.allAreSunk()).toBe(true);
  gameBoardObj.placeShipAt([1, 0], [1, 2], 3, 'battleShip');
  gameBoardObj.receiveAttack(1, 1);
  expect(gameBoardObj.allAreSunk()).toBe(false);
  gameBoardObj.receiveAttack(1, 0);
  gameBoardObj.receiveAttack(1, 2);
  expect(gameBoardObj.allAreSunk()).toBe(true);
});

test('FillAroundSunkShip function works correctly', () => {
  gameBoardObj.placeShipAt([0, 0], [0, 0], 1, 'submarine');
  gameBoardObj.receiveAttack(0, 0);
  gameBoardObj.fillAroundSunkShip();

  expect(gameBoardObj.gameBoard[0][1]).toBe('x');
  expect(gameBoardObj.gameBoard[1][0]).toBe('x');
  expect(gameBoardObj.gameBoard[1][1]).toBe('x');

  gameBoardObj.placeShipAt([3, 2], [3, 2], 1, 'patrol');
  gameBoardObj.receiveAttack(3, 2);
  gameBoardObj.fillAroundSunkShip();
  expect(gameBoardObj.gameBoard[3][1]).toBe('x');
  expect(gameBoardObj.gameBoard[2][2]).toBe('x');
  expect(gameBoardObj.gameBoard[2][3]).toBe('x');
  expect(gameBoardObj.gameBoard[3][3]).toBe('x');
  expect(gameBoardObj.gameBoard[4][2]).toBe('x');
  expect(gameBoardObj.gameBoard[4][1]).toBe('x');
});

test('cleanBoard function works correctly', () => {
  gameBoardObj.placeShipAt([0, 0], [0, 0], 1, 'submarine');
  expect(gameBoardObj.gameBoard[0][0]).not.toBe('');
  gameBoardObj.cleanGameBoard();
  expect(gameBoardObj.gameBoard[0][0]).toBe('');
});

test('isPlaceAlreadyHit function works correctly', () => {
  gameBoardObj.receiveAttack(0, 0);
  expect(gameBoardObj.isPlaceAlreadyHit(0, 0)).toBe(true);
  expect(gameBoardObj.isPlaceAlreadyHit(0, 1)).toBe(false);
});
