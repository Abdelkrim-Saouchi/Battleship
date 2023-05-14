export default function Player(name) {
  const hitCoordinates = [];

  const hasAlreadyHit = (row, col) => {
    for (let i = 0; i < hitCoordinates.length; i += 1) {
      if (hitCoordinates[i][0] === row && hitCoordinates[i][1] === col)
        return true;
    }
    return false;
  };

  const humanAttack = (row, col, gameBoard) => {
    if (
      row == null ||
      col == null ||
      typeof row !== 'number' ||
      typeof col !== 'number'
    )
      throw Error('invalid row or col');
    if (gameBoard == null) throw Error('no gameBoard passed');
    if (hasAlreadyHit(row, col)) return;
    hitCoordinates.push([row, col]);
    gameBoard.receiveAttack(row, col);
    gameBoard.fillAroundSunkShip();
  };

  const computerAttack = (gameBoard) => {
    if (gameBoard == null) throw Error('no gameBoard passed');
    if (hitCoordinates.length === 100) return;
    let row = Math.floor(Math.random() * 10);
    let col = Math.floor(Math.random() * 10);

    while (hasAlreadyHit(row, col)) {
      row = Math.floor(Math.random() * 10);
      col = Math.floor(Math.random() * 10);
    }
    hitCoordinates.push([row, col]);
    gameBoard.receiveAttack(row, col);
    gameBoard.fillAroundSunkShip();
  };

  const generateRandomShipCoords = () => {
    const grid = Array(10)
      .fill()
      .map(() => Array(10).fill(0));
    const coords = [];

    const shipLengths = [5, 4, 3, 2, 1];

    // eslint-disable-next-line no-restricted-syntax
    for (const length of shipLengths) {
      let startRow;
      let startCol;
      let endRow;
      let endCol;
      let axis;
      let overlaps = true;

      // keep generating random coords and axis until valid ones
      while (overlaps) {
        startRow = Math.floor(Math.random() * 10);
        startCol = Math.floor(Math.random() * 10);
        axis = Math.random() > 0.5 ? 'horizontal' : 'vertical';

        // generate end coords based on length and axis of ship
        if (axis === 'horizontal') {
          endRow = startRow;
          if (startCol + length - 1 >= 10) {
            startCol = Math.floor(Math.random() * (11 - length));
          }
          endCol = startCol + length - 1;
        } else {
          if (startRow + length - 1 >= 10) {
            startRow = Math.floor(Math.random() * (11 - length));
          }
          endRow = startRow + length - 1;
          endCol = startCol;
        }

        overlaps = false;
        for (let i = startRow - 1; i <= endRow + 1; i += 1) {
          for (let j = startCol - 1; j <= endCol + 1; j += 1) {
            if (i >= 0 && i < 10 && j >= 0 && j < 10 && grid[i][j] === '#') {
              overlaps = true;
              break;
            }
          }
          if (overlaps) break;
        }
      }

      // mark the ship's location in the grid
      for (let i = startRow; i <= endRow; i += 1) {
        for (let j = startCol; j <= endCol; j += 1) {
          grid[i][j] = '#';
        }
      }

      // add the ship's start and end coordinates to the list of coordinates
      coords.push([
        [startRow, startCol],
        [endRow, endCol],
      ]);
    }

    return coords;
  };

  return {
    name,
    humanAttack,
    computerAttack,
    generateRandomShipCoords,
  };
}
