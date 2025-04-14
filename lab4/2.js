function verificarvalor() {
    let numero = parseInt(document.getElementById("numero").value)
    document.getElementById("numero").innerHTML = numero;

}

function exibirmensagem(mensagem) {
    let valor = parseInt(document.getElementById("valor").value);
}
     
if (valorUsuario == numeroAleatorio) {
        resultado.textContent = "Parabéns! Você acertou o número " + numeroAleatorio;
        resultado.style.setProperty("background-color", "lightgreen");
}
      
else {
        resultado.textContent = "Errou! O número era " + numeroAleatorio;
        resultado.style.setProperty("background-color", "red"); 
}

document.getElementById("NumeroAleatorio").innerHTML = mensagem;