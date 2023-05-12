// function generateHorizontalCoord(shipLength) {
//   const MAX = 9; // maximum index for valid coordinate
//   let startRow = Math.floor(Math.random() * 10);
//   let startCol = Math.floor(Math.random() * 10);

//   let endRow = startRow;
//   let endCol = startCol + shipLength - 1;

//   while (endCol > MAX) {
//     startRow = Math.floor(Math.random() * 10);
//     startCol = Math.floor(Math.random() * 10);

//     endRow = startRow;
//     endCol = startCol + shipLength - 1;
//   }

//   return [
//     [startRow, startCol],
//     [endRow, endCol],
//   ];
// }

// function generateVerticalCoord(shipLength) {
//   const MAX = 9;
//   let startRow = Math.floor(Math.random() * 10);
//   let startCol = Math.floor(Math.random() * 10);
//   let endRow = startRow + shipLength - 1;
//   let endCol = startCol;

//   while (endRow > MAX) {
//     startRow = Math.floor(Math.random() * 10);
//     startCol = Math.floor(Math.random() * 10);

//     endRow = startRow + shipLength - 1;
//     endCol = startCol;
//   }

//   return [
//     [startRow, startCol],
//     [endRow, endCol],
//   ];
// }

// function generateRandomShipCoord(shipLength) {
//   const choices = ['vertical', 'horizontal'];
//   const randomIndex = Math.floor(Math.random() * 2);
//   // console.log('randomIndex', randomIndex);
//   if (choices[randomIndex] === 'vertical') {
//     // console.log('entered');
//     return generateVerticalCoord(shipLength);
//   }
//   return generateHorizontalCoord(shipLength);
// }

// function isAlreadySelected(selectedList, coordinates) {
//   for (let i = 0; i < selectedList.length; i += 1) {
//     if (
//       selectedList[i][0] === coordinates[0] &&
//       selectedList[i][1] === coordinates[1]
//     ) {
//       return true;
//     }
//   }
//   return false;
// }

// export default function generateNoDuplicatedShipCoord() {
//   const numberOfShips = 5;
//   const uniqueCoord = [];
//   for (let i = numberOfShips; i > 0; i -= 1) {
//     let shipCoord = generateRandomShipCoord(i);
//     while (isAlreadySelected(uniqueCoord, shipCoord)) {
//       shipCoord = generateRandomShipCoord(i);
//     }
//     uniqueCoord.push(shipCoord);
//   }
//   // console.log('coord:', uniqueCoord);
//   return uniqueCoord;
// }

// const unique = generateNoDuplicatedShipCoord();
// console.log(unique);

// export default function startGameFactory() {
//   //   const shipStart = generateShipStart();
// }

export default function generateShipCoords() {
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
}
