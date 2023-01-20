// Kata 1

/* let numeros1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

function kata1 (lista1){
    let par1 = 0;
    let impar1 = 0;
    for (let i = 1; i <= 30; i++){
        if(lista1[i] % 2 == 0){
            par1 ++
        }else if (lista1[i] % 2 != 0){
            impar1 ++
        }
    } console.log(`A lista recebida possui ${par1} elementos pares e ${impar1} elementos ímpares.`)
}
kata1(numeros1) */

// kata 2

/* let numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function kata2 (lista2){
    let impar2 = 0;
    let perc2 = 0;
    for (let i = 1; i <= lista2.length; i++){
        if (lista2[i] % 2 != 0){
            impar2 ++;
        }
    }
    perc2 = impar2 / lista2.length * 100;
    console.log(`O total de valores ímpares é ${impar2} e corresponde a ${perc2}% da lista`)
}
kata2(numeros2) */


// Kata 3

/* let numeros3 = [6, 12, 18, 24, 30, 36, 42, 48, 54, 60];
let numeros32 = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

function kata3 (a,b){
    let juncao3 = [];
    if (a.length != 10 || b.length != 10){
        console.log('Lista fora dos padrões necessários');
    }
    for (let i = 0; i < a.length; i++){
        if (a[i] % 2 != 0 && a[i] % 3 != 0){
            console.log('Valores não permitidos encontrados');            
        }
        juncao3.push(numeros3[i]);
    }
    for (let i = 0; i < b.length; i++){
        if (b[i] % 5 != 0){
            console.log('Valores não permitidos encontrados');            
        }
        juncao3.push(numeros32[i]);
    }
    console.log(juncao3);

}
kata3(numeros3,numeros32) */

