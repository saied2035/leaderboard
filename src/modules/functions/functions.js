export const updateLocalStorage = (scores) => localStorage.setItem('scores', JSON.stringify(scores));

export const getLocalStorage = () => {
  if (!localStorage.scores || !localStorage.scores.length) return false;

  return JSON.parse(localStorage.getItem('scores'));
};

export const showScores = () => {
  const scores = getLocalStorage();
  if (scores === false) return;

  const ul = document.querySelector('#scores-container');
  scores.forEach((score) => {
    const li = document.createElement('li');
    li.className = 'list-item';

    const p = document.createElement('p');
    p.className = 'score';
    p.innerText = ` ${score.name}: ${score.value}`;

    li.appendChild(p);
    ul.appendChild(li);
  });
};