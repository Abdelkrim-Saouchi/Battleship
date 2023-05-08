/* eslint-disable no-param-reassign */
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

export default function displayController() {
  const createBoardGrid = (parentClass) => {
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
  };

  const renderBoard = (boardGrid, boardData) => {
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

  const getAttackCoordinates = (target, coordinates) => {
    const coordinatesCopy = coordinates.slice(0);
    // if (coordinatesCopy.length > 0) {
    //   coordinatesCopy = [];
    // }
    coordinatesCopy.push(Number(target.parentElement.dataset.rowIndex));
    coordinatesCopy.push(Number(target.dataset.colIndex));
    return coordinatesCopy;
  };

  const changeDisplayer = (phrase) => {
    const displayer = document.querySelector('.game-control-panel__displayer');
    displayer.textContent = phrase;
  };

  return {
    createBoardGrid,
    renderBoard,
    getAttackCoordinates,
    changeDisplayer,
  };
}
