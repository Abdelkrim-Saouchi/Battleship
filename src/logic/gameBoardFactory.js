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

  const placeShipAt = (firstIndex, lastIndex, length, name) => {
    if (firstIndex == null || typeof firstIndex !== 'number')
      throw new Error('Invalid ship firstIndex');
    if (lastIndex == null || typeof lastIndex !== 'number')
      throw new Error('Invalid ship lastIndex');
    if (firstIndex > gameBoard.length || firstIndex < 0) return;
    if (lastIndex > gameBoard.length || lastIndex < 0) return;

    const ship = shipFactory(length, name);
    for (let i = 0; i < lastIndex + 1; i += 1) {
      gameBoard[firstIndex][i] = ship;
    }
  };

  return {
    gameBoard,
    placeShipAt,
  };
}
