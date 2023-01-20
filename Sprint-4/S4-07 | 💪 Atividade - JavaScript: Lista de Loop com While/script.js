// Kata 1

/* let valor1 = parseInt(prompt('Insira um número de 0 a 10'));

while (valor1 < 0 || valor1 > 10){
    alert('Número inválido')
    valor1 = parseInt(prompt('Tente novamente'));
    
}
    alert('Obrigado'); */

// Kata 2

/* let nomeUsuario2 = prompt('Digite seu nome de usuário');
let senha2 = prompt('Digite sua senha');
while (nomeUsuario2 == senha2){
    alert('A senha não pode ser igual ao nome');
    senha2 = prompt('Digite outra senha');
}  
    alert('Senha cadastrada com sucesso'); */

// Kata 3

/* let numero3 = parseInt(prompt('Digite um valor de 1 a 10'));
let soma3 = 0;
let media3 = 0;
let arr3 = [];

while (numero3 >= 0 && numero3 <= 10 && parseInt(numero3)){
    arr3 = arr3 + numero3;
    soma3 = soma3 + numero3;
    media3 = soma3 / arr3.length;
    numero3 = parseInt(prompt('Insira um novo número'));
}
    alert(`A soma dos número é ${soma3} e a média é ${media3}`); */

// Kata 4

/* let candidatoA = 0;
let candidatoB = 0;
let candidatoC = 0;
let seuVoto = prompt('Digite seu voto aqui ou x para sair');

    while (seuVoto != 'x'){
           
        if (seuVoto == 'a'){
        candidatoA++
        alert('Voto registrado com sucesso! Obrigado por seu voto');
    }   
        else if (seuVoto == 'b'){
        candidatoB++
        alert('Voto registrado com sucesso! Obrigado por seu voto');
    }   
        else if (seuVoto == 'c'){
        candidatoC++
        alert('Voto registrado com sucesso! Obrigado por seu voto');
    }
    else {
        alert('Candidato não encontrado')
    }

    seuVoto = prompt('Digite seu voto aqui ou x para sair')
    
}
    alert(`O candidato A teve ${candidatoA} votos.`);
    alert(`O candidato B teve ${candidatoB} votos.`);
    alert(`O candidato C teve ${candidatoC} votos.`); */