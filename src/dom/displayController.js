/* eslint-disable no-param-reassign */
function createBoardRow(rowClass) {
  const row = document.createElement('div');
  // row.classList.add('game-container__row');
  row.classList.add(rowClass);
  return row;
}

function createBoardCell(colClass) {
  const cell = document.createElement('div');
  // cell.classList.add('game-container__cell');
  cell.classList.add(colClass);
  return cell;
}

export const createBoardGrid = (parentSelector, rowClass, colClass) => {
  const parent = document.querySelector(parentSelector);
  const ROWS = 10;
  const COLUMNS = 10;
  for (let i = 0; i < ROWS; i += 1) {
    const row = createBoardRow(rowClass);
    row.dataset.rowIndex = i;
    for (let j = 0; j < COLUMNS; j += 1) {
      const col = createBoardCell(colClass);
      col.dataset.colIndex = j;
      row.appendChild(col);
    }
    parent.appendChild(row);
  }

  return parent;
};

export const renderBoard = (boardGrid, boardData) => {
  for (let i = 0; i < boardData.length; i += 1) {
    for (let j = 0; j < boardData[i].length; j += 1) {
      if (boardData[i][j] !== '' && !boardData[i][j].includes('x')) {
        boardGrid[i].children[j].classList.add('green');
      } else if (boardData[i][j] !== '' && boardData[i][j] === 'x') {
        boardGrid[i].children[j].innerHTML = 'O';
        boardGrid[i].children[j].classList.add('red');
      } else if (boardData[i][j] !== '' && boardData[i][j].includes('x')) {
        boardGrid[i].children[j].innerHTML = 'X';
        boardGrid[i].children[j].classList.add('hit');
      }
    }
  }
};

export const getAttackCoordinates = (target, coordinates) => {
  const coordinatesCopy = coordinates.slice(0);
  // if (coordinatesCopy.length > 0) {
  //   coordinatesCopy = [];
  // }
  coordinatesCopy.push(Number(target.parentElement.dataset.rowIndex));
  coordinatesCopy.push(Number(target.dataset.colIndex));
  return coordinatesCopy;
};

export const changeDisplayer = (phrase) => {
  const displayer = document.querySelector('.game-control-panel__displayer');
  displayer.textContent = phrase;
};

let draggedShip;
let direction = 'horizontal';
const shipNames = [
  'currier',
  'battleship',
  'destroyer',
  'submarine',
  'patrol boat',
];
const shipsLength = [5, 4, 3, 2, 1];

export function dragStart(e) {
  draggedShip = e.target;
}

export function dragOver(e) {
  e.preventDefault();
}

export function dropShip(e) {
  let startRow;
  let startCol;
  let endRow;
  let endCol;

  const shipName = shipNames[draggedShip.id];
  const shipLength = shipsLength[draggedShip.id];
  // eslint-disable-next-line prefer-const
  startRow = Number(e.target.parentElement.dataset.rowIndex);

  // eslint-disable-next-line prefer-const
  startCol = Number(e.target.dataset.colIndex);

  if (direction === 'horizontal') {
    endRow = startRow;

    if (startCol + shipLength - 1 >= 10) return;
    endCol = startCol + shipLength - 1;
  } else {
    if (startRow + shipLength - 1 >= 10) return;
    endRow = startRow + shipLength - 1;
    endCol = startCol;
  }

  // eslint-disable-next-line consistent-return
  return {
    shipName,
    shipLength,
    start: [startRow, startCol],
    end: [endRow, endCol],
  };
}
