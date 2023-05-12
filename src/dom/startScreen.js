import gameBoardFactory from '../logic/gameBoardFactory';
import displayController from './displayController';

const gameBoardOne = gameBoardFactory();
const gameBoardTwo = gameBoardFactory();
const displayCtrl = displayController();
const uiBoardOne = displayCtrl.createBoardGrid(
  '.game-container__grid--one',
  'game-container__row',
  'game-container__cell'
);
const uiBoardTwo = displayCtrl.createBoardGrid(
  '.game-container__grid--two',
  'game-container__row',
  'game-container__cell'
);
displayCtrl.renderBoard(uiBoardOne.children, gameBoardOne.gameBoard);
displayCtrl.renderBoard(uiBoardTwo.children, gameBoardTwo.gameBoard);

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
const ships = [];

const shipOptionsContainer = document.querySelector(
  '.start-section__ship-options'
);
const shipOptions = Array.from(shipOptionsContainer.children);

const allHumanPlayerBoardCells = [];
window.addEventListener('DOMContentLoaded', () => {
  const humanGrid = document.querySelector('.game-container__grid--one');
  const humanGridRows = Array.from(humanGrid.children);
  humanGridRows.forEach((row) => {
    const children = Array.from(row.children);
    children.forEach((child) => {
      allHumanPlayerBoardCells.push(child);
    });
  });
});

function dragStart(e) {
  console.log(e.target);
  draggedShip = e.target;
  console.log(draggedShip);
}

function dragOver(e) {
  e.preventDefault();
}

function dropShip(e) {
  let startRow;
  let startCol;
  let endRow;
  let endCol;
  console.log(draggedShip);
  const shipName = shipNames[draggedShip.id];
  const shipLength = shipsLength[draggedShip.id];
  startRow = e.target.parentElement.dataset.rowIndex;
  startCol = e.target.dataset.colIndex;
  if (direction === 'horizontal') {
    endRow = startRow;
    if (startCol + shipLength - 1 >= 10) return;
    endCol = startCol + shipLength - 1;
  } else {
    if (startRow + shipLength - 1 >= 10) return;
    endRow = startRow + shipLength - 1;
    endCol = startCol;
  }

  gameBoardOne.placeShipAt(
    [startRow, startCol],
    [endRow, endCol],
    shipLength,
    shipName
  );
  console.log(gameBoardOne.gameBoard);
  displayCtrl.renderBoard(uiBoardOne.children, gameBoardOne.gameBoard);

  ships.push({ shipName, shipLength, startRow, startCol, endRow, endCol });
}

shipOptions.forEach((shipOption) =>
  shipOption.addEventListener('dragstart', dragStart)
);

allHumanPlayerBoardCells.forEach((playerCell) => {
  playerCell.addEventListener('dragover', dragOver);
  playerCell.addEventListener('drop', dropShip);
});
export default function startScreen() {}
export { gameBoardOne, gameBoardTwo, uiBoardOne, uiBoardTwo };
