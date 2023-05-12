import startScreen from './dom/startScreen';
import gameFactory from './logic/game';
import './style.css';

const startScr = startScreen();

const game = gameFactory(
  startScr.gameBoardOne,
  startScr.gameBoardTwo,
  startScr.uiBoardOne,
  startScr.uiBoardTwo
);
game.run();
