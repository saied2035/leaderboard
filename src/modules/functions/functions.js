const showScores = async (game) => {
  const scores = await game.loadGameScores();
  if (!scores.length) return;

  const ul = document.querySelector('#scores-container');
  ul.innerHTML = '';

  scores.sort((a, b) => b.score - a.score);

  scores.forEach((item) => {
    const li = document.createElement('li');
    li.className = 'list-item';

    const p = document.createElement('p');
    p.className = 'score';
    p.innerText = ` ${item.user}: ${item.score}`;

    li.appendChild(p);
    ul.appendChild(li);
  });
};

export default showScores;