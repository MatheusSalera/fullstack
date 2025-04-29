const mensagens = [
 
  "Cada detalhe seu me encanta ",
  "Com você, tudo faz sentido ",
  "Você é meu hoje e meu sempre 💘",
  "Te ter é um presente da vida ",
  "Você me completa de verdade ",
  "Contigo sou mais feliz ",
  "Nosso amor é minha paz "
];

let indiceMensagem = 0;

document.getElementById("simBtn").addEventListener("click", function() {
  // Troca para a tela do coração
  document.getElementById("perguntaContainer").style.display = "none";
  document.getElementById("coracaoContainer").style.display = "block";
});

document.getElementById("naoBtn").addEventListener("click", function() {
  // Exibe a mensagem para tentar novamente
  alert("Responda novamente. Você ama o Matheus?");
});

function mostrarMensagem() {
  const mensagemEl = document.getElementById("message");

  // Animação de transição
  mensagemEl.style.opacity = 0;

  setTimeout(() => {
    mensagemEl.textContent = mensagens[indiceMensagem];
    mensagemEl.style.opacity = 1;
    indiceMensagem = (indiceMensagem + 1) % mensagens.length;
  }, 300);
}
