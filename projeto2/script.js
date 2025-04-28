const game = document.getElementById("game");
const player = document.getElementById("player");
let lasers = [];
let enemies = [];

document.addEventListener("keydown", (e) => {
  const left = player.offsetLeft;
  if (e.key === "ArrowLeft" && left > 0) {
    player.style.left = `${left - 20}px`;
  } else if (e.key === "ArrowRight" && left < window.innerWidth - 50) {
    player.style.left = `${left + 20}px`;
  } else if (e.key === " " || e.key === "ArrowUp") {
    shoot();
  }
});

function shoot() {
  const laser = document.createElement("div");
  laser.classList.add("laser");
  laser.style.left = `${player.offsetLeft + 18}px`;
  laser.style.bottom = `60px`;
  game.appendChild(laser);
  lasers.push(laser);
}

function spawnEnemy() {
  const enemy = document.createElement("div");
  enemy.classList.add("enemy");
  enemy.style.left = `${Math.random() * (window.innerWidth - 40)}px`;
  enemy.style.top = `-40px`;
  game.appendChild(enemy);
  enemies.push(enemy);
}

function gameLoop() {
  // Move lasers
  lasers.forEach((laser, index) => {
    const bottom = parseInt(laser.style.bottom);
    laser.style.bottom = `${bottom + 10}px`;
    if (bottom > window.innerHeight) {
      laser.remove();
      lasers.splice(index, 1);
    }
  });

  // Move enemies
  enemies.forEach((enemy, index) => {
    const top = parseInt(enemy.style.top);
    enemy.style.top = `${top + 3}px`;

    // Colisão
    lasers.forEach((laser, lIndex) => {
      const laserRect = laser.getBoundingClientRect();
      const enemyRect = enemy.getBoundingClientRect();
      if (
        laserRect.left < enemyRect.right &&
        laserRect.right > enemyRect.left &&
        laserRect.top < enemyRect.bottom &&
        laserRect.bottom > enemyRect.top
      ) {
        enemy.remove();
        laser.remove();
        enemies.splice(index, 1);
        lasers.splice(lIndex, 1);
      }
    });

    if (top > window.innerHeight) {
      enemy.remove();
      enemies.splice(index, 1);
    }
  });

  requestAnimationFrame(gameLoop);
}

setInterval(spawnEnemy, 1000);
gameLoop();