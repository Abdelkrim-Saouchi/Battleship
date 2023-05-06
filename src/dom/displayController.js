import gameFactory from '../logic/game';

function createBoardRow() {
  const row = document.createElement('div');
  row.classList.add('game-container__row');
  return row;
}

function createBoardCell() {
  const cell = document.createElement('div');
  cell.classList.add('game-container__cell');
  return cell;
}

function createBoardGrid(parentClass) {
  const parent = document.querySelector(parentClass);
  const ROWS = 10;
  const COLUMNS = 10;
  for (let i = 0; i < ROWS; i += 1) {
    const row = createBoardRow();
    row.dataset.rowIndex = i;
    for (let j = 0; j < COLUMNS; j += 1) {
      const col = createBoardCell();
      col.dataset.colIndex = j;
      row.appendChild(col);
    }
    parent.appendChild(row);
  }

  return parent;
}

function renderBoard(boardGrid, boardData) {
  for (let i = 0; i < boardData.length; i += 1) {
    for (let j = 0; j < boardData[i].length; j += 1) {
      if (boardData[i][j] !== '' && boardData[i][j] !== 'x') {
        boardGrid[i].children[j].classList.add('green');
      }
    }
  }
}

function getAttackCoordinates(boardGrid) {
  let coordinates = [];
  boardGrid.addEventListener('click', (e) => {
    if (coordinates.length > 0) {
      coordinates = [];
    }
    coordinates.push(Number(e.target.parentElement.dataset.rowIndex));
    coordinates.push(Number(e.target.dataset.colIndex));
  });
  return coordinates;
}

export default function displayController() {
  const boardOne = createBoardGrid('.game-container__grid--one');
  const boardTwo = createBoardGrid('.game-container__grid--two');
  const game = gameFactory();

  renderBoard(boardOne.children, game.gameBoardOne.gameBoard);
  renderBoard(boardTwo.children, game.gameBoardTwo.gameBoard);
}
