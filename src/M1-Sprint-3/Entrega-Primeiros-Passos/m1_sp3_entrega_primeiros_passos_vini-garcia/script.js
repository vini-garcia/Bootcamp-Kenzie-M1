// Kata 1

let numeroUm = parseFloat(prompt('Digite o primeiro número'));
let numeroDois = parseFloat(prompt('Digite o segundo número'));
if (numeroUm > numeroDois){
    let numeroMaiorUm = numeroUm - numeroDois
    alert(`O maior número é ${numeroUm} e a diferença é ${numeroMaiorUm}.`)
}
else {
    let numeroMaiorDois = numeroDois - numeroUm
    alert(`O maior número é ${numeroDois} e a diferença é ${numeroMaiorDois}.`)
}


// Kata 2

let numero1 = parseFloat(prompt('Digite o primeiro número'));
let numero2 = parseFloat(prompt('Digite o segundo número'));
if (numero1 > numero2){
    alert(`O número ${numero1} é maior que o ${numero2}.`)
}
else if (numero1 < numero2) {
    alert(`O número ${numero2} é maior que o ${numero1}.`)
}
else {
    alert(`Números iguais.`)
}

// Kata 3

let salario = parseFloat(prompt('Valor do salário'));
let valorPrestacao = parseFloat(prompt('Valor do prestação'));
let salario30 = salario * 0.3;
if (valorPrestacao > salario30) {
    console.log(`Empréstimo não concedido.`)
}
else {
    console.log(`Empréstimo concedido.`)
}


// Kata 4

let numeroDividendo = parseInt(prompt('Digite um número aqui'));
let divisor3 = 3;
let divisor5 = 5;
if ((numeroDividendo % divisor3) == 0 && (numeroDividendo % divisor5) == 0) {
    alert(`Valor inválido`)
}
else if ((numeroDividendo % divisor3) == 0) {
    alert(`Valor divisível por 3.`)
}
else if ((numeroDividendo % divisor5) == 0) {
    alert(`Valor divisível por 5.`)
    
}
else if ((numeroDividendo % 2) == 0 ){
    alert(`É par.`)
}
else {
    alert(`É ímpar.`)
}


// Kata 5

let numero = parseInt(prompt('Digite um número de 1 a 7'));
if (numero == 1) {
    alert(`Domingo`)
}
else if (numero == 2) {
    alert(`Segunda-feira`)
}
else if (numero == 3) {
    alert(`Terça-feira`)
}
else if (numero == 4) {
    alert(`Quarta-feira`)
}
else if (numero == 5) {
    alert(`Quinta-feira`)
}
else if (numero == 6) {
    alert(`Sexta-feira`)
}
else  {
    alert(`sábado`)
}


// Kata 6

let salarioAntigo = parseFloat(prompt('Digite seu salário antigo'));
let reajuste = parseFloat(prompt(`Digite o valor do reajuste`));
let reajuste2 = (reajuste /100 * salarioAntigo);
let salarioNovo = (salarioAntigo + reajuste2);
alert(`O salário do funcionário corrigido é de R$${salarioNovo.toFixed(2)}`);


// Kata 7

let dolar = parseFloat(prompt('Digite aqui o valor em Dólar'));
let cotacao = parseFloat(prompt('Digite aqui a cotação'));
let real = dolar * cotacao;
alert(`$${dolar.toFixed(2)} é equivalente a R$${real.toFixed(2)} tendo ${cotacao} como cotação.`);


// kata 8

let pragaInformada = prompt('Informe aqui a praga a ser combatida (ervas daninhas, gafanhotos, broca ou todos anteriores').toLowerCase();
let areaASerPulverizada = parseFloat(prompt('Digite aqui o tamanho da área a ser pulverizada em acres'));
let valorAcre = '';
if (pragaInformada == 'ervas daninhas'){
    valorAcre = 50
}else if (pragaInformada == 'gafanhotos'){
    valorAcre = 100
}else if (pragaInformada == 'broca'){
    valorAcre = 150
}else if (pragaInformada == 'todos anteriores'){
    valorAcre = 250
}else{
    alert('Não combatemos a praga informada.')
}
let calculoArea = areaASerPulverizada * valorAcre;
if (areaASerPulverizada > 1000 && calculoArea >750){
    calculoArea = (calculoArea * 0.95 - 750) * 0.9 + 750
    alert(`Para área informada de ${areaASerPulverizada} acres e a praga ${pragaInformada}, o valor total a ser pago é R$${calculoArea.toFixed(2)}`)
}else if (calculoArea > 750) {
    calculoArea = 750 + (calculoArea - 750) * 0.9;
    alert(`Para área informada de ${areaASerPulverizada} acres e a praga ${pragaInformada}, o valor total a ser pago é R$${calculoArea.toFixed(2)}`)

}else if (areaASerPulverizada > 1000){
    calculoArea = calculoArea * 0.95;
    alert(`Para área informada de ${areaASerPulverizada} acres e a praga ${pragaInformada}, o valor total a ser pago é R$${calculoArea.toFixed(2)}`)
}else{
    alert(` Para área informada de ${areaASerPulverizada} acres e a praga ${pragaInformada}, o valor total a ser pago é R$${calculoArea.toFixed(2)}`)
}

 
 
// Kata 9

let tempo = parseFloat(prompt('Quanto tempo em horas demorou sua viagem?'));
let velocidade = parseFloat(prompt('Qual velocidade em km/h você esteve?'));
let distanciaPercorrida = tempo * velocidade;
let listroUsados = distanciaPercorrida / 12;
alert(`Seu veículo percorreu ${distanciaPercorrida}km a ${velocidade}km/h em ${tempo}h de viagem e consumiu ${listroUsados.toFixed(2)}l de gasolina.`)


// Kata 10

let valor = parseFloat(prompt('Informe o valor da prestação'));
let taxa = parseFloat(prompt('Informe a taxa a ser aplicada'));
let tempoAtraso = parseFloat(prompt('Informar o tempo de atraso em dias'));
let prestacao = valor + (valor * (taxa/100) * tempoAtraso);
if (tempoAtraso == 0 || tempoAtraso != parseInt(tempoAtraso)){
    alert(`Valor inválido. O tempo de atraso deve ser em dias`)
} else {
    alert(`O valor atualizado da prestação é R$${prestacao}.`)
}
