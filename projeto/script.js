const startBtn = document.getElementById('startBtn');
const restartBtn = document.getElementById('restartBtn');
const gameArea = document.getElementById('gameArea');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
const startScreen = document.getElementById('startScreen');
const gameScreen = document.getElementById('gameScreen');
const gameOverScreen = document.getElementById('gameOverScreen');
const clickSound = document.getElementById('clickSound');
const gameOverSound = document.getElementById('gameOverSound');

let score = 0;
let timeLeft = 60;
let gameInterval;
let spawnInterval;
let gameTimer;
let targetSpeed = 1000; // Inicialmente, cada 1 segundo
let level = 1;

startBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', restartGame);

function startGame() {
  // Iniciar a tela de jogo
  startScreen.style.display = 'none';
  gameScreen.style.display = 'block';

  score = 0;
  level = 1;
  timeLeft = 60;
  targetSpeed = 1000;
  scoreDisplay.textContent = `Pontos: 0`;
  timerDisplay.textContent = `Tempo: 00:00`;

  // Iniciar o cronômetro
  gameTimer = setInterval(updateTimer, 1000);
  
  // Iniciar a geração de alvos
  spawnInterval = setInterval(spawnTarget, targetSpeed);

  // Atualizar o nível a cada 10 pontos
  gameInterval = setInterval(() => {
    if (score >= level * 10) {
      level++;
      targetSpeed -= 100; // Aumentar a velocidade dos alvos
      clearInterval(spawnInterval);
      spawnInterval = setInterval(spawnTarget, targetSpeed);
    }
  }, 10000); // Checa a cada 10 segundos
}

function updateTimer() {
  if (timeLeft <= 0) {
    endGame();
  } else {
    timeLeft--;
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `Tempo: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
}

function spawnTarget() {
  const target = document.createElement('div');
  target.classList.add('target');

  const x = Math.random() * (gameArea.clientWidth - 40);
  const y = Math.random() * (gameArea.clientHeight - 40);

  target.style.left = `${x}px`;
  target.style.top = `${y}px`;

  target.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = `Pontos: ${score}`;
    clickSound.play();
    target.remove();
  });

  // Alvo desaparece após 1 segundo
  setTimeout(() => target.remove(), 1000);

  gameArea.appendChild(target);
}

function endGame() {
  clearInterval(gameTimer);
  clearInterval(spawnInterval);
  gameOverSound.play();

  // Exibir tela de fim de jogo
  gameOverScreen.style.display = 'block';
  gameScreen.style.display = 'none';
  document.getElementById('finalScore').textContent = score;
}

function restartGame() {
  gameOverScreen.style.display = 'none';
  startScreen.style.display = 'block';
}
