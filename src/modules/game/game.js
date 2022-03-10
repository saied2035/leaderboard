class Game {
  constructor() {
    this.gameId = localStorage.gameId;
    this.url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';
    this.createGame();
  }

  async createGame() {
    if (this.gameId) return;
      const response = await fetch(this.url, {
      method: 'POST',
      body: JSON.stringify({ name: 'saiedGame' }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => res.json());
    this.gameId = response.result.replace(/(?:Game with ID:|added\.)/g, '');
    localStorage.setItem('gameId', this.gameId);
  }

  async addGameScore(user, score) {
    await fetch(`${this.url}/${this.gameId}/scores`, {
      method: 'POST',
      body: JSON.stringify({ user, score }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => res.json());
  }

  async loadGameScores() {
    const loadIcon = document.querySelector("#loading")
    loadIcon.classList.remove('dn')
    const response = await fetch(`${this.url}/${this.gameId}/scores`)
    .then((res) => res.json());
    loadIcon.classList.add('dn')
    return response.result;
  }
}
const game = new Game();
export default game;