// Kata

let cubo = 0;
let str = '';
function cubo10 (){
    for (let i = 1; i<=10; i++){
        cubo = i **3;
        console.log(`O cubo de ${i} é ${cubo}.`);
    }
}
cubo10();

// Kata 2 

let i = 1;
let str1 = '';
function divisiveisPor (limite, divisor){
    while (i <= limite){
        if (i % divisor == 0){
           str1 = str1 + ' ' + `${i}`; 
        }
        i++;
    }
    
    return str1;
}

console.log(divisiveisPor(100, 10));

// Kata 3

function posicaoLetra (palavra, numero){
    return palavra[numero];
}
console.log(posicaoLetra('algorítmos', 7));

// Kata 4

let palavraCurta = '';
function palavraRecortada (palavra, numero){
    for (let i = 0; i < numero; i++){
        palavraCurta = palavraCurta + `${palavra[i]}`;        
    }
    return palavraCurta    
}
console.log(palavraRecortada('Algoritmos', 4));

// Kata 5

let resto = '';
function palavraResto (palavra, numero){
    for (let i = numero; i < palavra.length; i++){
        resto = resto + `${palavra[i]}`;
    }
    return resto;
}
console.log(palavraResto('Algoritmos', 2));

// Kata 6

let vogais = 0;
function contaVogais (palavra){
    palavra = palavra.toLowerCase();
    for (let i = 0; i <= palavra.length; i++)
    if (palavra[i]  == 'a' || palavra[i]  == 'e' || palavra[i]  == 'i' || palavra[i]  == 'o' || palavra[i]  == 'u'){
        vogais ++        
    }
    console.log(vogais);
}

contaVogais('Abaxaxi');

// Kata 7

let palavra = '';
function textoDeTrasParaFrente (texto){
    for (let i = texto.length-1; i >= 0; i--){
    palavra = palavra +`${texto[i]}`;     
    }
    return palavra;
}
console.log(textoDeTrasParaFrente('abacaxi'));

// Kata 8

let semEspaços = '';
function removeEspacos (texto){
        for (let i = 0; i < texto.length; i++){
            if (texto[i] != ' '){
                semEspaços = semEspaços + `${texto[i]}`

            } 
        }
        return semEspaços;

}

console.log(removeEspacos("Não restará espaços em branco"));

// Kata 9

let criptoA = '';
let criptoE = '';
let criptoI = '';
let criptoO = '';
let criptoU = '';
function textoCriptografado (texto){
    texto = texto.toLowerCase();
    
    for ( let i = 0; i < texto.length; i++){
    if (texto[i] != 'a'){
        criptoA = criptoA + `${texto[i]}`
    }
    else if (texto[i] == 'a'){
        criptoA = criptoA + 'x';
    }
}


    for ( let i = 0; i < criptoA.length; i++){
        if (criptoA[i] != 'e'){
        criptoE = criptoE + `${criptoA[i]}`
    }
        else if (criptoA[i] == 'e'){
        criptoE = criptoE + 'y';
    }
}
    for ( let i = 0; i < criptoE.length; i++){
        if (criptoE[i] != 'i'){
    criptoI = criptoI + `${criptoE[i]}`
}
        else if (criptoE[i] == 'i'){
    criptoI = criptoI + 'w';
}
}

    for ( let i = 0; i < criptoI.length; i++){
        if (criptoI[i] != 'o'){
    criptoO = criptoO + `${criptoI[i]}`
}
        else if (criptoI[i] == 'o'){
    criptoO = criptoO + 'k';
}
}

for ( let i = 0; i < criptoO.length; i++){
    if (criptoO[i] != 'u'){
criptoU = criptoU + `${criptoO[i]}`
}
    else if (criptoO[i] == 'u'){
criptoU = criptoU + 'z';
}
}
criptoU = criptoU[0].toUpperCase() + criptoU.slice(1); 

return criptoU
}
 
console.log(textoCriptografado('Uma frase ultra secreta que precisa ser criptografada'));