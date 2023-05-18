import {
  changeDisplayer,
  createBoardGrid,
  getAttackCoordinates,
  renderBoard,
  dragOver,
  dragStart,
  dropShip,
  changeDirection,
  startPlaying,
  redisplayStartContainer,
  redisplayShipOptions,
  cleanUiBoard,
  touchStart,
  touchEnd,
  touchMove,
} from '../dom/displayController';
import gameBoardFactory from './gameBoardFactory';
import Player from './player';

// global variables to define the state of the game
let isHumanPlaying = true;
let isComputerPlaying = false;
let attackCoordinates = null;
let allReadyClicked = [];

// create players and boards
const humanPlayer = Player('Human');
const computer = Player('Computer');
const humanBoard = gameBoardFactory(); // for humanPlayer
const computerBoard = gameBoardFactory(); // for computer

// place ships of computer
const shipsCoord = computer.generateRandomShipCoords();

computerBoard.placeShipAt(shipsCoord[0][0], shipsCoord[0][1], 5, 'currier');
computerBoard.placeShipAt(shipsCoord[1][0], shipsCoord[1][1], 4, 'battleship');
computerBoard.placeShipAt(shipsCoord[2][0], shipsCoord[2][1], 3, 'destroyer');
computerBoard.placeShipAt(shipsCoord[3][0], shipsCoord[3][1], 2, 'submarine');
computerBoard.placeShipAt(shipsCoord[4][0], shipsCoord[4][1], 1, 'patrol boat');

// create UI boards
const uiHumanBoard = createBoardGrid(
  '.game-container__grid--one',
  'game-container__row',
  'game-container__cell'
);
const uiComputerBoard = createBoardGrid(
  '.game-container__grid--two',
  'game-container__row',
  'game-container__cell'
);

// render UI boards
renderBoard(uiHumanBoard.children, humanBoard.gameBoard, humanPlayer.name);
renderBoard(uiComputerBoard.children, computerBoard.gameBoard, computer.name);

// select and place human player ships
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
    if (humanShip) {
      humanBoard.placeShipAt(
        humanShip.start,
        humanShip.end,
        humanShip.shipLength,
        humanShip.shipName
      );
      renderBoard(
        uiHumanBoard.children,
        humanBoard.gameBoard,
        humanPlayer.name
      );
    }
  });
});

// for mobile browsers
shipOptions.forEach((shipOption) => {
  shipOption.addEventListener('touchstart', touchStart);
  shipOption.addEventListener('touchmove', touchMove);
  shipOption.addEventListener('touchend', (e) => {
    const humanShip = touchEnd(e);
    if (humanShip) {
      humanBoard.placeShipAt(
        humanShip.start,
        humanShip.end,
        humanShip.shipLength,
        humanShip.shipName
      );
      renderBoard(
        uiHumanBoard.children,
        humanBoard.gameBoard,
        humanPlayer.name
      );
    }
  });
});

// rotate Btn
const rotateBtn = document.querySelector('.start-section__rotate-btn');
rotateBtn.addEventListener('click', changeDirection);

// start play Btn
const playBtn = document.querySelector('.game-container__play-btn');
playBtn.addEventListener('click', startPlaying);

// restart Btn
const restartBtn = document.querySelector('.game-control-panel__restart-btn');
restartBtn.addEventListener('click', () => {
  // reset game state variables to default values
  isHumanPlaying = true;
  isComputerPlaying = false;
  attackCoordinates = null;
  allReadyClicked = [];

  // reset game UI to start state
  redisplayStartContainer();
  redisplayShipOptions();
  changeDisplayer('Your turn');
  humanPlayer.cleanHits();
  computer.cleanHits();
  humanBoard.cleanGameBoard();
  computerBoard.cleanGameBoard();
  humanBoard.cleanShips();
  computerBoard.cleanShips();
  cleanUiBoard(uiHumanBoard.children);
  cleanUiBoard(uiComputerBoard.children);

  // get new Random coords for computer
  const newShipsCoord = computer.generateRandomShipCoords();
  // set new places for computer's ships
  computerBoard.placeShipAt(
    newShipsCoord[0][0],
    newShipsCoord[0][1],
    5,
    'currier'
  );
  computerBoard.placeShipAt(
    newShipsCoord[1][0],
    newShipsCoord[1][1],
    4,
    'battleship'
  );
  computerBoard.placeShipAt(
    newShipsCoord[2][0],
    newShipsCoord[2][1],
    3,
    'destroyer'
  );
  computerBoard.placeShipAt(
    newShipsCoord[3][0],
    newShipsCoord[3][1],
    2,
    'submarine'
  );
  computerBoard.placeShipAt(
    newShipsCoord[4][0],
    newShipsCoord[4][1],
    1,
    'patrol boat'
  );

  // rerender game UI
  renderBoard(uiHumanBoard.children, humanBoard.gameBoard, humanPlayer.name);
  renderBoard(uiComputerBoard.children, computerBoard.gameBoard, computer.name);
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
  uiComputerBoard.addEventListener('click', (e) => {
    if (isHumanPlaying) {
      attackCoordinates = getAttackCoordinates(e.target, []);
      if (hasBeenClicked(allReadyClicked, attackCoordinates)) return;
      allReadyClicked.push(attackCoordinates);

      if (attackCoordinates) {
        const [row, col] = attackCoordinates;
        humanPlayer.humanAttack(row, col, computerBoard);
        isHumanPlaying = false;
        isComputerPlaying = true;
        changeDisplayer("Computer's turn");
        renderBoard(
          uiComputerBoard.children,
          computerBoard.gameBoard,
          computer.name
        );
        if (isWinner(computerBoard)) {
          changeDisplayer('Human player Wins!');
          isComputerPlaying = false; // to stop the game
        }
      }
    }
    if (isComputerPlaying) {
      // setTimeout to prevent instant play form computer
      setTimeout(() => {
        computer.computerAttack(humanBoard);
        isComputerPlaying = false;
        isHumanPlaying = true;
        changeDisplayer('Your turn');
        renderBoard(
          uiHumanBoard.children,
          humanBoard.gameBoard,
          humanPlayer.name
        );
        if (isWinner(humanBoard)) {
          changeDisplayer('Computer Wins!');
          isHumanPlaying = false; // to stop the game
        }
      }, 1500);
    }
  });
}
