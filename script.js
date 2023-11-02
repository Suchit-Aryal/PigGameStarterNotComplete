const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');

const current0 = document.getElementById('current--0');
const current1 = document.getElementById(`current--1`);

const dice = document.querySelector('.dice');

const btnNew = document.querySelector('.new');
const btnRoll = document.querySelector('.roll');
const btnHold = document.querySelector('.hold');

let score, activePlayer, currentScore, playing;

const initaial = function () {
  score = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0.textContent = 0;
  score1.textContent = 0;
  score0.textContent = 0;
  score1.textContent = 0;

  dice.classList.add('hidden');
  dice.classList.add('hidden');

  player0.classList.remove('hidden');
  player1.classList.add('hidden');

  document.querySelector(`.player--${activePlayer}`).classList.remove('win');

  current0.textContent = 0;
  current1.textContent = 0;
};
initaial();
const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};
