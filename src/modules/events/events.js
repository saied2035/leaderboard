const addScore = (event, game) => {
  const name = document.querySelector('#name');
  const score = document.querySelector('#score');
  game.addGameScore(name.value, score.value);
  name.value = null;
  score.value = null;
};

export default addScore;