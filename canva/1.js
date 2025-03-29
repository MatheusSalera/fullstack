let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

ctx.beginPath(); 
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.fillRect(0,0,60,60);
ctx.closePath();

ctx.beginPath(); 
ctx.lineWidth = 2;
ctx.fillStyle = 'red';
ctx.fillRect(240,0,60,60);
ctx.closePath();

ctx.beginPath(); 
ctx.lineWidth = 2;
ctx.strokeStyle = 'black';
ctx.strokeRect(0,0,300,300);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'black';
ctx.font = "20px Arial";
ctx.textAlign = "center";
ctx.fillText("Canvas",150,45);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth= 2;
ctx.fillStyle = "yellow";
ctx.fillRect(1,235,70,64);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = "white" ;
ctx.fillRect(37,235,34,34);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth=2;
ctx.fillStyle ="black";
ctx.fillRect(229,235,70,64);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle ="white";
ctx.fillRect(229,235,34,34);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth =1;
ctx.strokeStyle = "green";
ctx.strokeRect(0,150,150,150);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth =1;
ctx.strokeStyle = "green";
ctx.strokeRect(150,150,150,150);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth =2;
ctx.fillStyle = "red";
ctx.fillRect(110,150,40,40);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth =2;
ctx.fillStyle = "aqua";
ctx.fillRect(1,151,34,34);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth =2;
ctx.fillStyle = "aqua";
ctx.fillRect(1,115,34,34);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth =2;
ctx.fillStyle = "aqua";
ctx.fillRect(265,132,34,17);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth =2;
ctx.fillStyle = "aqua";
ctx.fillRect(265,151,34,17);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth =1;
ctx.fillStyle = "aqua";
ctx.strokeStyle = 'blue';
ctx.arc(150,115,15,1.10*Math.PI,3.2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth =1;
ctx.strokeStyle = 'green';
ctx.arc(150,150,65,1*Math.PI,0*Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth =1;
ctx.fillStyle = "yellow";
ctx.strokeStyle = 'green';
ctx.arc(80,215,15,1.10*Math.PI,3.2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth =1;
ctx.fillStyle = "yellow";
ctx.strokeStyle = 'green';
ctx.arc(215,215,15,1.10*Math.PI,3.2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth =1;
ctx.strokeStyle = 'green';
ctx.arc(125,150,65,1.*Math.PI,1.34*Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth =1;
ctx.strokeStyle = 'green';
ctx.arc(175,150,65,1.66*Math.PI,0*Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth =2;
ctx.strokeStyle = 'green';
ctx.fillStyle = "aqua";
ctx.arc(150,299,45,1*Math.PI,0*Math.PI);
ctx.stroke();
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth=1.5;
ctx.strokeStyle ="blue";
ctx.moveTo(150,150)
ctx.lineTo(60,60)
ctx.stroke()
ctx.closePath();

ctx.beginPath();
ctx.lineWidth=1.5;
ctx.strokeStyle ="red";
ctx.moveTo(280,20)
ctx.lineTo(150,150)
ctx.stroke()
ctx.closePath();

ctx.beginPath();
ctx.lineWidth =1.;
ctx.strokeStyle = 'green';
ctx.arc(170,299,90,1.*Math.PI,1.43*Math.PI);
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth =1.;
ctx.strokeStyle = 'green';
ctx.arc(150,299,65,1.5*Math.PI,0*Math.PI);
ctx.stroke();
ctx.closePath();



