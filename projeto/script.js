// 🎮 Seletores de elementos
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

// 🎯 Variáveis de controle do jogo
let score = 0;
let timeLeft = 60;
let gameInterval;
let spawnInterval;
let gameTimer;
let targetSpeed = 1000;
let level = 1;

// 🚀 Iniciar e reiniciar
startBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', restartGame);

// ▶️ Início do jogo
function startGame() {
  // Alternar telas
  startScreen.style.display = 'none';
  gameScreen.style.display = 'block';

  // Resetar variáveis
  score = 0;
  level = 1;
  timeLeft = 60;
  targetSpeed = 1000;

  // Atualizar HUD
  scoreDisplay.textContent = `Pontos: 0`;
  timerDisplay.textContent = `Tempo: 00:00`;

  // Iniciar contadores
  gameTimer = setInterval(updateTimer, 1000);
  spawnInterval = setInterval(spawnTarget, targetSpeed);

  // Sistema de níveis baseado em pontuação
  gameInterval = setInterval(() => {
    if (score >= level * 10) {
      level++;
      targetSpeed = Math.max(300, targetSpeed - 100); // velocidade mínima
      clearInterval(spawnInterval);
      spawnInterval = setInterval(spawnTarget, targetSpeed);
    }
  }, 10000);
}

// ⏰ Atualizar o cronômetro
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

// 🎯 Criar alvo na área de jogo
function spawnTarget() {
  const target = document.createElement('div');
  target.classList.add('target');

  // Posição aleatória dentro da área
  const x = Math.random() * (gameArea.clientWidth - 60);
  const y = Math.random() * (gameArea.clientHeight - 70);

  target.style.left = `${x}px`;
  target.style.top = `${y}px`;

  // Interação: clique no alvo
  target.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = `Pontos: ${score}`;
    clickSound.play();
    target.remove();
  });

  // Remover após 1s caso não clique
  setTimeout(() => target.remove(), 1000);

  gameArea.appendChild(target);
}

// ❌ Fim do jogo
function endGame() {
  clearInterval(gameTimer);
  clearInterval(spawnInterval);
  gameOverSound.play();

  // Alternar telas
  gameScreen.style.display = 'none';
  gameOverScreen.style.display = 'block';

  document.getElementById('finalScore').textContent = score;
}

// 🔁 Reiniciar
function restartGame() {
  gameOverScreen.style.display = 'none';
  startScreen.style.display = 'block';
}