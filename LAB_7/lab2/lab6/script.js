const canvas = document.getElementById('meuCanvas');
const ctx = canvas.getContext('2d');

const image = new Image();
image.src = 'santos.png'; 

const squareSize = 450;
const imgSize = 40;
const squareX = (canvas.width - squareSize) / 2;
const squareY = (canvas.height - squareSize) / 2;

let mouseX = squareX + squareSize / 2;
let mouseY = squareY + squareSize / 2;

canvas.addEventListener('mousemove', (event) => {
  const rect = canvas.getBoundingClientRect();
  let x = event.clientX - rect.left;
  let y = event.clientY - rect.top;
  x = Math.max(squareX + imgSize / 2, Math.min(x, squareX + squareSize - imgSize / 2));
  y = Math.max(squareY + imgSize / 2, Math.min(y, squareY + squareSize - imgSize / 2));
  mouseX = x;
  mouseY = y;
});

function desenhar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#black";
  ctx.fillRect(squareX, squareY, squareSize, squareSize);
  ctx.drawImage(image, mouseX - imgSize / 2, mouseY - imgSize / 2, imgSize, imgSize);
  requestAnimationFrame(desenhar);
}

image.onload = () => {
  desenhar();
};