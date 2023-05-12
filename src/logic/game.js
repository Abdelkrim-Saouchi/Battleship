import displayController from '../dom/displayController';
// import dragDropEventHandler from '../dom/startScreen';
// import allHumanPlayerBoardCells from '../dom/startScreen';
// import gameBoardFactory from './gameBoardFactory';
import Player from './player';
// import generateShipCoords from './startGame';
// import generateNoDuplicatedShipCoord from './startGame';

export default function gameFactory(
  gameBoardOne,
  gameBoardTwo,
  uiBoardOne,
  uiBoardTwo
) {
  const playerOne = Player('Human');
  const playerTwo = Player('Computer');
  // const gameBoardOne = gameBoardFactory(); // for playerOne
  // const gameBoardTwo = gameBoardFactory(); // for playerTwo

  // place ships of playerOne(Human)

  // gameBoardOne.placeShipAt([0, 0], [4, 0], 5, 'currier');
  // gameBoardOne.placeShipAt([9, 6], [9, 9], 4, 'battleship');
  // gameBoardOne.placeShipAt([3, 3], [5, 3], 3, 'destroyer');
  // gameBoardOne.placeShipAt([7, 3], [7, 4], 2, 'submarine');
  // gameBoardOne.placeShipAt([7, 6], [7, 6], 1, 'patrol boat');

  // place ships of playerTwo(Computer)
  // const shipsCoord = generateShipCoords();

  // gameBoardTwo.placeShipAt(shipsCoord[0][0], shipsCoord[0][1], 5, 'currier');
  // gameBoardTwo.placeShipAt(shipsCoord[1][0], shipsCoord[1][1], 4, 'battleship');
  // gameBoardTwo.placeShipAt(shipsCoord[2][0], shipsCoord[2][1], 3, 'destroyer');
  // gameBoardTwo.placeShipAt(shipsCoord[3][0], shipsCoord[3][1], 2, 'submarine');
  // gameBoardTwo.placeShipAt(
  //   shipsCoord[4][0],
  //   shipsCoord[4][1],
  //   1,
  //   'patrol boat'
  // );

  // render UI boards
  const displayCtrl = displayController();
  // const uiBoardOne = displayCtrl.createBoardGrid(
  //   '.game-container__grid--one',
  //   'game-container__row',
  //   'game-container__cell'
  // );
  // const uiBoardTwo = displayCtrl.createBoardGrid(
  //   '.game-container__grid--two',
  //   'game-container__row',
  //   'game-container__cell'
  // );
  // displayCtrl.renderBoard(uiBoardOne.children, gameBoardOne.gameBoard);
  // displayCtrl.renderBoard(uiBoardTwo.children, gameBoardTwo.gameBoard);

  // create and render start board

  // const startBoardUi = displayCtrl.createBoardGrid(
  //   '.start-section__start-grid',
  //   'start-section__row',
  //   'start-section__cell'
  // );

  // displayCtrl.renderBoard(startBoardUi.children, startBoard.gameBoard);

  // select restart button
  // const restartBtn = document.querySelector('.game-control-panel__restart-btn');

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

  // play game method
  const run = () => {
    // startBoardUi.addEventListener('mouseover', (e) => {
    //   // console.log(e.target);
    // });

    // window.addEventListener('DOMContentLoaded', dragDropEventHandler);

    let isHumanPlaying = true;
    let isComputerPlaying = false;
    let attackCoordinates = null;
    const allReadyClicked = [];
    uiBoardTwo.addEventListener('click', (e) => {
      if (isHumanPlaying) {
        attackCoordinates = displayCtrl.getAttackCoordinates(e.target, []);
        if (hasBeenClicked(allReadyClicked, attackCoordinates)) return;
        allReadyClicked.push(attackCoordinates);

        if (attackCoordinates) {
          const [row, col] = attackCoordinates;
          playerOne.humanAttack(row, col, gameBoardTwo);
          // gameBoardTwo.fillAroundSunkShip();
          displayCtrl.renderBoard(uiBoardTwo.children, gameBoardTwo.gameBoard);
          isHumanPlaying = false;
          isComputerPlaying = true;
          displayCtrl.changeDisplayer("Computer's turn");
          if (isWinner(gameBoardTwo)) {
            displayCtrl.changeDisplayer('Human player Wins!');
            isComputerPlaying = false; // to stop the game
          }
        }
      }
      if (isComputerPlaying) {
        setTimeout(() => {
          playerTwo.computerAttack(gameBoardOne);
          // gameBoardOne.fillAroundSunkShip();
          displayCtrl.renderBoard(uiBoardOne.children, gameBoardOne.gameBoard);
          isComputerPlaying = false;
          isHumanPlaying = true;
          displayCtrl.changeDisplayer('Your turn');
          if (isWinner(gameBoardOne)) {
            displayCtrl.changeDisplayer('Computer Wins!');
            isHumanPlaying = false; // to stop the game
          }
        }, 1500);
      }
    });
    // restartBtn.addEventListener('click', () => {});
  };

  return {
    run,
  };
}
