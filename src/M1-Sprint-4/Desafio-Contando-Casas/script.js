function gerarNumeroAleatorio() {
    let numero = 0;
    numero = Math.floor((Math.random() * 2) + 1);;
    return numero
}
console.log(gerarNumeroAleatorio());


let aleatorio = gerarNumeroAleatorio();
let meuPalpite = '';
function verificarPalpite (palpite, numAleatorio){
    meuPalpite = parseInt(prompt('Digite um número de 1 a 20'));
    let tentativa = 1;
    while (palpite != numAleatorio){
        tentativa++;
        //alert('Tente Novamente');
        palpite = parseInt(prompt('Digite um número de 1 a 20'));
    }
    if (palpite == numAleatorio){
    alert (`Você acertou na tentativa ${tentativa}`)
    }
}
verificarPalpite(meuPalpite, aleatorio)