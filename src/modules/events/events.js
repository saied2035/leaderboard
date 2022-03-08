import { updateLocalStorage } from '../functions/functions.js';

const addScore = (event, scores) => {
  const ul = document.querySelector('#scores-container');
  const name = document.querySelector('#name');
  const score = document.querySelector('#score');

  const li = document.createElement('li');
  li.className = 'list-item';

  const p = document.createElement('p');
  p.className = 'score';
  p.innerText = ` ${name.value}: ${score.value}`;
  li.appendChild(p);
  ul.appendChild(li);
  scores.push({ name: name.value, value: score.value });
  updateLocalStorage(scores);
};

export default addScore;