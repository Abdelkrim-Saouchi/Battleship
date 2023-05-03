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

    gameBoard.receiveAttack(row, col);
  };
  return {
    name,
    humanAttack,
    computerAttack,
  };
}
