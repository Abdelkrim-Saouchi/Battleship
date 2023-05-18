/* eslint-disable no-param-reassign */
const createBoardRow = (rowClass) => {
  const row = document.createElement('div');
  row.classList.add(rowClass);
  return row;
};

const createBoardCell = (colClass) => {
  const cell = document.createElement('div');
  cell.classList.add(colClass);
  return cell;
};

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

export const renderBoard = (boardGrid, boardData, playerName) => {
  for (let i = 0; i < boardData.length; i += 1) {
    for (let j = 0; j < boardData[i].length; j += 1) {
      if (
        boardData[i][j] !== '' &&
        !boardData[i][j].includes('x') &&
        playerName === 'Human'
      ) {
        boardGrid[i].children[j].classList.add('green');
      } else if (boardData[i][j] !== '' && boardData[i][j] === 'x') {
        boardGrid[i].children[j].classList.add('missed');
      } else if (boardData[i][j] !== '' && boardData[i][j].includes('x')) {
        boardGrid[i].children[j].classList.add('hit');
      }
    }
  }
};

export const cleanUiBoard = (boardGrid) => {
  for (let i = 0; i < boardGrid.length; i += 1) {
    for (let j = 0; j < boardGrid[i].children.length; j += 1) {
      boardGrid[i].children[j].classList.remove('green');
      boardGrid[i].children[j].classList.remove('missed');
      boardGrid[i].children[j].classList.remove('hit');
    }
  }
};

export const getAttackCoordinates = (target, coordinates) => {
  const coordinatesCopy = coordinates.slice(0);
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

let hasAlreadyChosen = [];

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

  // hide dragged ship form ships options
  draggedShip.classList.add('hidden');
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

const shipsOptions = Array.from(
  document.querySelectorAll('.start-section__ship-options > div')
);

const isGameReady = () => {
  for (let i = 0; i < shipsOptions.length; i += 1) {
    if (!shipsOptions[i].classList.contains('hidden')) {
      return false;
    }
  }
  return true;
};

const startPlayContainer = document.querySelector(
  '.game-container__start-play-container'
);

export const startPlaying = () => {
  if (isGameReady()) {
    startPlayContainer.classList.add('hidden');
  }
};

export const redisplayStartContainer = () => {
  startPlayContainer.classList.remove('hidden');
};

export const redisplayShipOptions = () => {
  shipsOptions.forEach((shipOption) => shipOption.classList.remove('hidden'));
  // reset tracking array for new ship positioning
  hasAlreadyChosen = [];
};

// for mobile browsers
let currentX;
let currentY;

export const touchMove = (e) => {
  e.preventDefault();
  const touch = e.touches[0];
  currentX = touch.clientX;
  currentY = touch.clientY;
};

export const touchEnd = (e) => {
  let startRow;
  let startCol;
  let endRow;
  let endCol;
  // Get the position of the grid container
  const gridContainer = document.querySelector('.game-container__grid--one');
  const gridXOffset = gridContainer.getBoundingClientRect().left;
  const gridYOffset = gridContainer.getBoundingClientRect().top;

  // Calculate the adjusted touch position relative to the grid container
  const gridCell = document.querySelector(
    '.game-container__grid--one .game-container__cell'
  );
  const cellWidth = gridCell.offsetWidth;
  const cellHeight = gridCell.offsetHeight;
  const adjustedTouchX = currentX + cellWidth / 2 - gridXOffset;
  const adjustedTouchY = currentY + cellHeight / 2 - gridYOffset;

  // eslint-disable-next-line prefer-const
  startRow = Math.round(adjustedTouchY / cellHeight) - 1;
  // eslint-disable-next-line prefer-const
  startCol = Math.round(adjustedTouchX / cellWidth) - 1;

  const shipName = shipNames[e.target.id];
  const shipLength = shipsLength[e.target.id];

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

  // hide dragged ship form ships options
  e.target.classList.add('hidden');
  // eslint-disable-next-line consistent-return
  return {
    shipName,
    shipLength,
    start: [startRow, startCol],
    end: [endRow, endCol],
  };
};
