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

const hasAlreadyChosen = [];

function isSameStart(startRow, startCol) {
  for (let i = 0; i < hasAlreadyChosen.length; i += 1) {
    if (
      hasAlreadyChosen[i][0][0] === startRow &&
      hasAlreadyChosen[i][0][1] === startCol
    ) {
      return true;
    }
  }
  return false;
}

function isValidPosition(startRow, startCol, endRow, endCol) {
  for (let i = 0; i < hasAlreadyChosen.length; i += 1) {
    const chosenStartCol = hasAlreadyChosen[i][0][1];
    const chosenEndCol = hasAlreadyChosen[i][1][1];
    const chosenStartRow = hasAlreadyChosen[i][0][0];
    const chosenEndRow = hasAlreadyChosen[i][1][0];
    if (
      (startRow === chosenStartRow &&
        startCol > chosenStartCol &&
        startCol <= chosenEndCol) ||
      (startRow === chosenStartRow &&
        endCol > chosenStartCol &&
        endCol <= chosenEndCol)
    ) {
      return false;
    }
    if (
      (startCol === chosenStartCol &&
        startRow > chosenStartRow &&
        startRow <= chosenEndRow) ||
      (startCol === chosenStartCol &&
        endRow > chosenStartRow &&
        endRow <= chosenEndRow)
    ) {
      return false;
    }
  }
  return true;
}

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

  if (isSameStart(startRow, startCol)) return;
  if (!isValidPosition(startRow, startCol, endRow, endCol)) return;
  hasAlreadyChosen.push([
    [startRow, startCol],
    [endRow, endCol],
  ]);

  // remove dragged ship form ships options
  draggedShip.remove();

  // eslint-disable-next-line consistent-return
  return {
    shipName,
    shipLength,
    start: [startRow, startCol],
    end: [endRow, endCol],
  };
}

export function changeDirection() {
  const directionDisplay = document.querySelector(
    '.start-section__axis-indicator'
  );
  directionDisplay.textContent =
    directionDisplay.textContent === 'axis: Horizontal'
      ? 'axis: Vertical'
      : 'axis: Horizontal';
  direction = direction === 'horizontal' ? 'vertical' : 'horizontal';
}
