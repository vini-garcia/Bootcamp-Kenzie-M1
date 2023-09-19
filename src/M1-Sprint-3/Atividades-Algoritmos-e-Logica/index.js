// Kata 1

/* let salarioMinimo = parseFloat(prompt('Digite o valor do salário mínimo aqui'));
let quantQuilowatts = parseFloat(prompt('Digite a quantidade de quilowatts gasto no mês aqui'));
let valorDoQuilowatts = (salarioMinimo / 7) / 100;
let valorASerpago = quantQuilowatts * valorDoQuilowatts;
let valorDesconto = valorASerpago - (valorASerpago * 0.1);
console.log(`O valor em reais de cada quilowatt é R$${valorDoQuilowatts.toFixed(2)}.`);
console.log(`O valor em reais a ser pago é R$${valorASerpago.toFixed(2)}.`);
console.log(`Valor a ser pago com desconto de 10% é R$${valorDesconto.toFixed(2)}.`);  */

// Kata 2

/* let produto = parseFloat(prompt('Digite o valor do produto aqui'));
let desconto = 0.09;
console.log(`O valor do produto com desconto é de R$${produto - (produto * desconto).toFixed(2)}.`); */

// Kata 3

/* let texto1 = 'A';
let texto2 = 'B';
let aux = texto1;
texto1 = texto2;
texto2 = aux;
console.log(`Respectivamente, os valores do primeiro texto e do segundo texto eram originalmente: ${texto2} e ${texto1}. Após a troca passaram a ser: ${texto1} e ${texto2}.`); */

// Kata 4

/* let quantDeFitas = parseInt(prompt('Digite aqui a quantidade de fitas'));
let valorAluguel = parseFloat(prompt('Digite aqui o valor de cada aluguel'));
let faturamentoAnual = (quantDeFitas / 3 * 1) * valorAluguel * 12;
console.log(`O faturamento anual da empresa é R$${faturamentoAnual.toFixed(2)}.`);

let valorMultas = valorAluguel * 0.1;
let fitasEmAtraso = ((quantDeFitas / 3 * 1) * 0.1);
let faturamentoMulta = fitasEmAtraso * valorMultas;
console.log(`O valor ganho em multas por mês é de R$${faturamentoMulta.toFixed(2)}.`);

let fitasEstragadas = quantDeFitas * 0.02;
let fitasReposição = quantDeFitas * 0.1;
let fitasFinalDoAno = quantDeFitas + fitasReposição - fitasEstragadas;
console.log(`A locadora terá no final do ano ${fitasFinalDoAno.toFixed(0)} fitas.`); */

// Kata 5

/* let numero = prompt('Digite um número entre 111 e 999');
console.log(`A centena do número é ${numero[0] + '00'}.`);
console.log(`A dezena do número é ${numero[1] + '0'}.`);
console.log(`A unidade do número é ${numero[2]}.`); */

// kata 6

/* let numero = prompt('Digite um número entre 111 e 999');
let numeroInvertido = numero[2] + numero[1] + numero[0];
console.log(numeroInvertido); */

// Kata 7

let numeroConta = prompt('Digite o número de sua conta corrente com três dígitos');
let numeroInvertido = numeroConta[2] + numeroConta[1] + numeroConta[0];
let somaNumeros = parseInt(numeroConta) + parseInt(numeroInvertido);
let stringParaSoma = somaNumeros.toString();
let ordemNumeros = (stringParaSoma[0] * 1) + (stringParaSoma[1] * 2) + (stringParaSoma[2] *3);
let stringParaOrden = ordemNumeros.toString();
let digVerificador = stringParaOrden;
console.log(`O digito verificador de sua conta é ${digVerificador[1]}.`);
