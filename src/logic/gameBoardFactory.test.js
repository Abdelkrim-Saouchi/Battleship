import gameBoardFactory from './gameBoardFactory';
import shipFactory from './shipFactory';

const gameBoardObj = gameBoardFactory();
test('ship placed properly', () => {
  const firstShipIndex = 0;
  const lastShipIndex = 4;
  const shipLength = 5;
  gameBoardObj.placeShipAt(
    firstShipIndex,
    lastShipIndex,
    shipLength,
    'currier'
  );
  for (let i = 0; i < lastShipIndex + 1; i += 1) {
    expect(JSON.stringify(gameBoardObj.gameBoard[0][i])).toEqual(
      JSON.stringify(shipFactory(5, 'currier'))
    );
  }
});

test('handling invalid first index and last index works', () => {
  expect(() => gameBoardObj.placeShipAt(undefined, 1, 5, 'currier')).toThrow(
    'Invalid ship firstIndex'
  );
  expect(() => gameBoardObj.placeShipAt('ab', 1, 5, 'currier'));
  expect(() => gameBoardObj.placeShipAt(1, undefined, 5, 'currier')).toThrow(
    'Invalid ship lastIndex'
  );
  expect(() => gameBoardObj.placeShipAt(1, 'ab', 5, 'currier'));
});

test('handling misplacing ship works correctly', () => {
  const firstIndex = 8;
  const lastIndex = 13;
  const shipLength = 5;
  gameBoardObj.placeShipAt(firstIndex, lastIndex, shipLength, 'currier');
  for (let i = firstIndex; i < lastIndex - 3; i += 1) {
    expect(gameBoardObj.gameBoard[0][i]).toBe('');
  }
});
