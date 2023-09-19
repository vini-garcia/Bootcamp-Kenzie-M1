// Kata 1

/* let texto = prompt('Digite palavra');
let textoConcatenado = [];
    function kata1 (){
        while (texto != 'sair')
            if (texto.length >= 5){
                textoConcatenado.push(texto)
                texto = prompt('Digite palavra');
            }else{
                alert('Texto menor que 5 caracteres')
                texto = prompt('Digite palavra');
            }
    return textoConcatenado
}

console.log(kata1()) */

// Kata 2

/* let arr = ["Hermanoteu", "Olonéia", "Migalatéia", "Godart"];
let number = parseInt(prompt('Digite um número'));
    function kata2 (){
        if (number < arr.length){
            return arr[number];
        }else {
            
            alert ('numero inválido');
        }        
    }
console.log(kata2()); */

// Kata 3

/* let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numero = parseInt(prompt('Digite um número'));
    function kata3 (){
        if (numero < arr.length && arr[numero] % 2 == 0){
            alert('Esse número é par');

        } else{
            alert('Esse número é ímpar');
        }

    }
    kata3(); */


// Kata 4

/*     let nome = ['Pedro', 'Rafael', 'José', 'Vinicius'];
    let maiorNome = '';

        function kata4 (){
            for (let i = 0; i < nome.length; i++){
                if (nome[i].length > maiorNome.length){
                    maiorNome = nome[i]
                }
            } console.log(maiorNome)
        }
        kata4() */

// Kata 5

/* let numeros = [1, 4, 6, 9, 11, 8];

        function kata5(numeros){
            let soma =  numeros[numeros.length-1] + numeros[numeros.length-2];
            console.log(soma);
            if (soma % 2 == 0){
                alert('A soma é um múltimplo de 2');
            }else {
                alert('A soma não é multiplo de 2')
            }
        }
kata5(numeros) */

// Kata 6

/* let nomes = ["Pedro", "Rafael", "José", "Carla", "Maria", "Josef", "Raquel"];
let nome = '';
let valor = 0;
        function kata6 (nomes, nome, valor){
            
            for (let i = 0; i < nomes.length; i++)
            if (nome == nomes[valor]){
                return 'Acertei'
            }else {
                return 'Não é quem eu pensava'
            }
        }
    console.log(kata6(nomes, 'Carla', 1)); */



//  Kata 7

/* let numeros = [1,2,3,4,5,6,10];
let outrosNumeros = [5,7,9,4,2,3,9,11];
        function kata7 () {
            if (numeros.length == outrosNumeros.length){
                return `As listas têm o mesmo tamanho. O último número da primeira lista é ${numeros[numeros.length-1]} e o último número da segunda lista é ${outrosNumeros[outrosNumeros.length-1]}.`                
            }else if (numeros.length > outrosNumeros.length){
                return `A maior lista é a lista "números" cujo último é ${numeros[numeros.length-1]}.`
            }else{
                return `A maior lista é a lista "outros números" cujo último é ${outrosNumeros[outrosNumeros.length-1]}.`
            }
        }
console.log(kata7(numeros, outrosNumeros)) */