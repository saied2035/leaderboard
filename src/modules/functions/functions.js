import place1 from '../../images/place1.png';
import place2 from '../../images/place2.png';
import place3 from '../../images/place3.png';

const showScores = async (game) => {
  const postionsArr = [place1, place2, place3];
  const ul = document.querySelector('#scores-container');
  const scores = await game.loadGameScores();
  if (!scores.length) return;
  scores.sort((a, b) => b.score - a.score);

  scores.forEach((item, i) => {
    const li = document.createElement('li');
    li.className = 'list-item grow';
    if (i < 3) {
      const position = document.createElement('img');
      position.src = postionsArr[i];
      position.alt = `Medal${i + 1}`;
      position.width = '25';
      position.className = 'special-record';
      position.loading = 'lzay';
      li.prepend(position);
    }
    const p = document.createElement('p');
    p.className = 'score';
    p.innerText = ` ${item.user}: ${item.score}`;

    li.prepend(p);
    ul.appendChild(li);
  });
};

export default showScores;