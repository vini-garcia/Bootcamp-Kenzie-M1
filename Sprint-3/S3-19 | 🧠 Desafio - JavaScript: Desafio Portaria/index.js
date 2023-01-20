let nome = prompt('Digite seu nome aqui');
let idade = parseInt(prompt('Digite sua idade aqui'));
let estaAcompanhado = prompt('Está acompanhado?');
if (estaAcompanhado == 'Sim'){
    estaAcompanhado = true
} else {
    estaAcompanhado = false
}

if (idade < 18) {
    alert(`Entrada não permitida para ${nome}: Menor da idade.`);
} else if (idade >= 18 && estaAcompanhado == false) {
    alert(`Entrada permitida para ${nome}: Valor integral.`)

} else {
    alert(`Entrada permitida para ${nome}: Conceder desconto.`)
}