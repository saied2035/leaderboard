import './style.css';
import 'tachyons';
import addScore from './modules/events/events.js';
import { showScores } from './modules/functions/functions.js';

document.querySelector('#score-form').addEventListener('submit', (event) => {
  event.preventDefault();
  addScore(event);
});

showScores();