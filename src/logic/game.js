import {
  changeDisplayer,
  createBoardGrid,
  getAttackCoordinates,
  renderBoard,
  dragOver,
  dragStart,
  dropShip,
} from '../dom/displayController';
import gameBoardFactory from './gameBoardFactory';
import Player from './player';

const playerOne = Player('Human');
const playerTwo = Player('Computer');
const gameBoardOne = gameBoardFactory(); // for playerOne
const gameBoardTwo = gameBoardFactory(); // for playerTwo

// place ships of playerTwo(Computer)
const shipsCoord = playerTwo.generateRandomShipCoords();

gameBoardTwo.placeShipAt(shipsCoord[0][0], shipsCoord[0][1], 5, 'currier');
gameBoardTwo.placeShipAt(shipsCoord[1][0], shipsCoord[1][1], 4, 'battleship');
gameBoardTwo.placeShipAt(shipsCoord[2][0], shipsCoord[2][1], 3, 'destroyer');
gameBoardTwo.placeShipAt(shipsCoord[3][0], shipsCoord[3][1], 2, 'submarine');
gameBoardTwo.placeShipAt(shipsCoord[4][0], shipsCoord[4][1], 1, 'patrol boat');

// place ships of playerOne(Human)
// gameBoardOne.placeShipAt([0, 0], [4, 0], 5, 'currier');
// gameBoardOne.placeShipAt([9, 6], [9, 9], 4, 'battleship');
// gameBoardOne.placeShipAt([3, 3], [5, 3], 3, 'destroyer');
// gameBoardOne.placeShipAt([7, 3], [7, 4], 2, 'submarine');
// gameBoardOne.placeShipAt([7, 6], [7, 6], 1, 'patrol boat');

// render UI boards

const uiBoardOne = createBoardGrid(
  '.game-container__grid--one',
  'game-container__row',
  'game-container__cell'
);
const uiBoardTwo = createBoardGrid(
  '.game-container__grid--two',
  'game-container__row',
  'game-container__cell'
);
renderBoard(uiBoardOne.children, gameBoardOne.gameBoard);
renderBoard(uiBoardTwo.children, gameBoardTwo.gameBoard);

// select ships
const shipOptionsContainer = document.querySelector(
  '.start-section__ship-options'
);
const shipOptions = Array.from(shipOptionsContainer.children);
const allHumanPlayerBoardCells = Array.from(
  document.querySelectorAll('.game-container__grid--one .game-container__cell')
);
shipOptions.forEach((shipOption) =>
  shipOption.addEventListener('dragstart', dragStart)
);

allHumanPlayerBoardCells.forEach((playerCell) => {
  playerCell.addEventListener('dragover', dragOver);
  playerCell.addEventListener('drop', (e) => {
    const humanShip = dropShip(e);
    gameBoardOne.placeShipAt(
      humanShip.start,
      humanShip.end,
      humanShip.shipLength,
      humanShip.shipName
    );
    renderBoard(uiBoardOne.children, gameBoardOne.gameBoard);
  });
});

// check winner
const isWinner = (gameBoard) => gameBoard.allAreSunk();

// check if clicked before
const hasBeenClicked = (clicksList, coordinates) => {
  for (let i = 0; i < clicksList.length; i += 1) {
    if (
      clicksList[i][0] === coordinates[0] &&
      clicksList[i][1] === coordinates[1]
    ) {
      return true;
    }
  }
  return false;
};

// game loop
export default function play() {
  let isHumanPlaying = true;
  let isComputerPlaying = false;
  let attackCoordinates = null;
  const allReadyClicked = [];
  uiBoardTwo.addEventListener('click', (e) => {
    if (isHumanPlaying) {
      attackCoordinates = getAttackCoordinates(e.target, []);
      if (hasBeenClicked(allReadyClicked, attackCoordinates)) return;
      allReadyClicked.push(attackCoordinates);

      if (attackCoordinates) {
        const [row, col] = attackCoordinates;
        playerOne.humanAttack(row, col, gameBoardTwo);
        // gameBoardTwo.fillAroundSunkShip();
        renderBoard(uiBoardTwo.children, gameBoardTwo.gameBoard);
        isHumanPlaying = false;
        isComputerPlaying = true;
        changeDisplayer("Computer's turn");
        if (isWinner(gameBoardTwo)) {
          changeDisplayer('Human player Wins!');
          isComputerPlaying = false; // to stop the game
        }
      }
    }
    if (isComputerPlaying) {
      setTimeout(() => {
        playerTwo.computerAttack(gameBoardOne);
        // gameBoardOne.fillAroundSunkShip();
        renderBoard(uiBoardOne.children, gameBoardOne.gameBoard);
        isComputerPlaying = false;
        isHumanPlaying = true;
        changeDisplayer('Your turn');
        if (isWinner(gameBoardOne)) {
          changeDisplayer('Computer Wins!');
          isHumanPlaying = false; // to stop the game
        }
      }, 1500);
    }
  });
}
