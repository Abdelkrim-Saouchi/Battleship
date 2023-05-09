function generateHorizontalCoord(shipLength) {
  const MAX = 9; // maximum index for valid coordinate
  let startRow = Math.floor(Math.random() * 10);
  let startCol = Math.floor(Math.random() * 10);

  let endRow = startRow;
  let endCol = startCol + shipLength;

  while (endCol > MAX) {
    startRow = Math.floor(Math.random() * 10);
    startCol = Math.floor(Math.random() * 10);

    endRow = startRow;
    endCol = startCol + shipLength;
  }

  return [
    [startRow, startCol],
    [endRow, endCol],
  ];
}

function generateVerticalCoord(shipLength) {
  const MAX = 9;
  let startRow = Math.floor(Math.random() * 10);
  let startCol = Math.floor(Math.random() * 10);
  let endRow = startRow + shipLength;
  let endCol = startCol;

  while (endRow > MAX) {
    startRow = Math.floor(Math.random() * 10);
    startCol = Math.floor(Math.random() * 10);

    endRow = startRow + shipLength;
    endCol = startCol;
  }

  return [
    [startRow, startCol],
    [endRow, endCol],
  ];
}

function generateRandomShipCoord(shipLength) {
  const choices = ['vertical', 'horizontal'];
  const randomIndex = Math.floor(Math.random() * 2);
  console.log('randomIndex', randomIndex);
  if (choices[randomIndex] === 'vertical') {
    console.log('entered');
    return generateVerticalCoord(shipLength);
  }
  return generateHorizontalCoord(shipLength);
}

function isAlreadySelected(selectedList, coordinates) {
  for (let i = 0; i < selectedList.length; i += 1) {
    if (
      selectedList[i][0] === coordinates[0] &&
      selectedList[i][1] === coordinates[1]
    ) {
      return true;
    }
  }
  return false;
}

export default function generateNoDuplicatedShipCoord() {
  const numberOfShips = 5;
  const uniqueCoord = [];
  for (let i = numberOfShips; i > 0; i -= 1) {
    let shipCoord = generateRandomShipCoord(i);
    while (isAlreadySelected(uniqueCoord, shipCoord)) {
      shipCoord = generateRandomShipCoord(i);
    }
    uniqueCoord.push(shipCoord);
  }
  console.log('coord:', uniqueCoord);
  return uniqueCoord;
}

// const unique = generateNoDuplicatedShipCoord();
// console.log(unique);

// export default function startGameFactory() {
//   //   const shipStart = generateShipStart();
// }
