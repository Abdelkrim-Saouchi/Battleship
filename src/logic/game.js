import displayController from '../dom/displayController';
import gameBoardFactory from './gameBoardFactory';
import Player from './player';

export default function gameFactory() {
  const playerOne = Player('Human');
  const playerTwo = Player('Computer');
  const gameBoardOne = gameBoardFactory(); // for playerOne
  const gameBoardTwo = gameBoardFactory(); // for playerTwo

  // place ships of playerOne
  gameBoardOne.placeShipAt([0, 0], [0, 4], 5, 'currier');
  gameBoardOne.placeShipAt([9, 6], [9, 9], 4, 'battleship');
  gameBoardOne.placeShipAt([3, 0], [3, 2], 3, 'destroyer');
  gameBoardOne.placeShipAt([5, 3], [5, 4], 2, 'submarine');
  gameBoardOne.placeShipAt([7, 6], [7, 6], 1, 'patrol boat');

  // place ships of playerTwo
  gameBoardTwo.placeShipAt([0, 0], [0, 4], 5, 'currier');
  gameBoardTwo.placeShipAt([9, 6], [9, 9], 4, 'battleship');
  gameBoardTwo.placeShipAt([3, 0], [3, 2], 3, 'destroyer');
  gameBoardTwo.placeShipAt([5, 3], [5, 4], 2, 'submarine');
  gameBoardTwo.placeShipAt([7, 6], [7, 6], 1, 'patrol boat');

  // render UI boards
  const displayCtrl = displayController();
  const uiBoardOne = displayCtrl.createBoardGrid('.game-container__grid--one');
  const uiBoardTwo = displayCtrl.createBoardGrid('.game-container__grid--two');
  displayCtrl.renderBoard(uiBoardOne.children, gameBoardOne.gameBoard);
  displayCtrl.renderBoard(uiBoardTwo.children, gameBoardTwo.gameBoard);

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
  };

  return {
    run,
  };
}
