let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.fillRect(0, 0, 60, 60);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'red';
ctx.fillRect(240, 0, 60, 60);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'black';
ctx.strokeRect(0, 0, 300, 300);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'black';
ctx.font = "20px Arial";
ctx.textAlign = "center";
ctx.fillText("Canvas", 150, 45);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = "yellow";
ctx.fillRect(1, 235, 70, 64);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = "white";
ctx.fillRect(37, 235, 34, 34);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = "black";
ctx.fillRect(229, 235, 70, 64);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = "white";
ctx.fillRect(229, 235, 34, 34);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = "green";
ctx.strokeRect(0, 150, 150, 150);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = "green";
ctx.strokeRect(150, 150, 150, 150);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = "red";
ctx.fillRect(110, 150, 40, 40);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = "aqua";
ctx.fillRect(1, 151, 34, 34);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = "aqua";
ctx.fillRect(1, 115, 34, 34);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = "aqua";
ctx.fillRect(265, 132, 34, 17);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = "aqua";
ctx.fillRect(265, 151, 34, 17);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = "aqua";
ctx.strokeStyle = 'blue';
ctx.arc(150, 115, 15, 1.10 * Math.PI, 3.2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = 'green';
ctx.arc(150, 150, 65, 1 * Math.PI, 0 * Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = "yellow";
ctx.strokeStyle = 'green';
ctx.arc(80, 215, 15, 1.10 * Math.PI, 3.2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = "yellow";
ctx.strokeStyle = 'green';
ctx.arc(215, 215, 15, 1.10 * Math.PI, 3.2 * Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = 'green';
ctx.arc(125, 150, 65, 1. * Math.PI, 1.34 * Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = 'green';
ctx.arc(175, 150, 65, 1.66 * Math.PI, 0 * Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.strokeStyle = 'green';
ctx.fillStyle = "aqua";
ctx.arc(150, 299, 45, 1 * Math.PI, 0 * Math.PI);
ctx.stroke();
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1.5;
ctx.strokeStyle = "blue";
ctx.moveTo(150, 150)
ctx.lineTo(60, 60)
ctx.stroke()
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1.5;
ctx.strokeStyle = "red";
ctx.moveTo(280, 20)
ctx.lineTo(150, 150)
ctx.stroke()
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1.;
ctx.strokeStyle = 'green';
ctx.arc(170, 299, 90, 1. * Math.PI, 1.43 * Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 1.;
ctx.strokeStyle = 'green';
ctx.arc(150, 299, 65, 1.5 * Math.PI, 0 * Math.PI);
ctx.stroke();
ctx.closePath();

{

    let canvas2 = document.getElementById('canvas2');
    let ctx = canvas2.getContext('2d');

    // circulo amarelo
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = 'yellow';
    ctx.arc(300, 105, 50, 1.10 * Math.PI, 3.2 * Math.PI);
    ctx.fill();
    ctx.closePath();

    // retangulo cinza
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.fillStyle = 'darkgrey';
    ctx.fillRect(0, 300, 400, 100);
    ctx.closePath();

    // tronco direita
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.fillStyle = 'SaddleBrown';
    ctx.fillRect(340, 295, 20, 50);
    ctx.closePath();

    // circulo arvore direita
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = 'green';
    ctx.arc(350, 278, 30, 1.10 * Math.PI, 3.2 * Math.PI);
    ctx.fill();
    ctx.closePath();

    // tronco esquerda
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.fillStyle = 'SaddleBrown';
    ctx.fillRect(55, 250, 20, 50);
    ctx.closePath();

    // circulo arvore esquerda
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = 'green';
    ctx.arc(65, 235, 30, 1.10 * Math.PI, 3.2 * Math.PI);
    ctx.fill();
    ctx.closePath();

    // trem azul de baixo
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.fillStyle = '#1C86EE';
    ctx.fillRect(0, 350, 180, 50);
    ctx.closePath();

    // circulo do trem azul de baixo
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = '#1C86EE';
    ctx.arc(175, 390, 40, 1.10 * Math.PI, 3.2 * Math.PI);
    ctx.fill();
    ctx.closePath();

    // trem azul de cima
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.fillStyle = '#1C86EE';
    ctx.fillRect(0, 290, 54, 110);
    ctx.closePath();

    // circulo do trem azul de cima
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.fillStyle = '#1C86EE';
    ctx.arc(14, 298, 40, 1.10 * Math.PI, 3.2 * Math.PI);
    ctx.fill();
    ctx.closePath();

    // quadrado marrom casa
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.fillStyle = 'SaddleBrown';
    ctx.fillRect(147, 200, 100, 100);
    ctx.closePath();

    //teto casa
    ctx.beginPath();
    ctx.moveTo(146, 200);
    ctx.lineTo(248, 200);
    ctx.lineTo(200, 145);
    ctx.closePath();
    ctx.fillStyle = "#EE6A50";
    ctx.fill();

    // janela esquerda
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.fillStyle = '#63B8FF';
    ctx.fillRect(155, 220, 32, 32);
    ctx.closePath();

    // janela direita
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.fillStyle = '#63B8FF';
    ctx.fillRect(206, 220, 32, 32);
    ctx.closePath();

    // porta
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.fillStyle = '#5C3C2B';
    ctx.fillRect(186.5, 252, 20, 48);
    ctx.closePath();
}

