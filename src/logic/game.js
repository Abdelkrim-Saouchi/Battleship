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

  const run = () => {
    // while (!gameBoardOne.allAreSunk() || !gameBoardTwo.allAreSunk()) {
    //   let attackCoordinates;
    //   uiBoardTwo.addEventListener('click', (e) => {
    //     attackCoordinates = displayCtrl.getAttackCoordinates(e.target, []);
    //   });
    // }
    let isHumanPlaying = true;
    let isComputerPlaying = false;
    let attackCoordinates = null;
    uiBoardTwo.addEventListener('click', (e) => {
      if (isHumanPlaying) {
        attackCoordinates = displayCtrl.getAttackCoordinates(e.target, []);
        if (attackCoordinates) {
          console.log('enter');
          const [row, col] = attackCoordinates;
          playerOne.humanAttack(row, col, gameBoardTwo);
          isHumanPlaying = false;
          isComputerPlaying = true;
          displayCtrl.renderBoard(uiBoardTwo.children, gameBoardTwo.gameBoard);
        }
      }
      if (isComputerPlaying) {
        playerTwo.computerAttack(gameBoardOne);
        displayCtrl.renderBoard(uiBoardOne.children, gameBoardOne.gameBoard);
        isComputerPlaying = false;
        isHumanPlaying = true;
      }
    });
  };

  return {
    run,
  };
}
