import './style.css';
import 'tachyons';
import game from './modules/game/game.js';
import addScore from './modules/events/events.js';
import showScores from './modules/functions/functions.js';

document.querySelector('#score-form').addEventListener('submit', (event) => {
  event.preventDefault();
  addScore(event, game);
});

document.querySelector('#scores-btn-refresh').addEventListener('click', () => {
  showScores(game);
});

showScores(game);
