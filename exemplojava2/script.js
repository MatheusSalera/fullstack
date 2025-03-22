function verificarvalor() {
    let numero = parseInt(document.getElementById("numero").value)
    document.getElementById("numero").innerHTML = numero;

}

function exibirmensagem(mensagem) {
    let valor = parseInt(document.getElementById("valor").value);

    if (valor >= 0 && valor < 10) {
        mensagem = "Insuficiente";
    }
    else if (valor >= 10 && valor <= 15) {
        mensagem = "Bom";
    }
    else if (valor > 15) {
        mensagem = "Muito Bom";
    }


    document.getElementById("numero").innerHTML = mensagem;
}


