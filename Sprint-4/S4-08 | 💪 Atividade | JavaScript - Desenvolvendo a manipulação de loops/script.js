// Kata 1

/* function verticalText (a){
    for (let i = 0; i <= a.length; i++){
        console.log(a[i])
    }
}
verticalText('front'); */

// Kata 3

/* function incrementText (a){
    let string = '';
    for (let i = 0; i <= a.length-1; i++){
        string += a[i];
        console.log(string);
    }
}
incrementText('Front') */

// Kata 3

/* function incrementTextBackwards (a){
    let string = '';
    for (i = a.length-1; i >= 0; i--){
        string = a[i] + string;      
        console.log(string);  
    }    
}
incrementTextBackwards('Front') */

// Kata 4

/* let string = '';
function padEnd (Palavra, repeticao, caracter){
    let rep = '';
    for (let i = 1; i <= repeticao; i++){
        rep += caracter;
    }
    string = Palavra+rep;
    console.log(string);
}
padEnd('Kenzie',5,'fo'); */

// Kata 5


/* function subString (palavra,posicaoInicial,posicaoFinal){
let retorno = '';
    for (let i = 0; i <= palavra.length-1; i++){
        if (i > posicaoInicial && i < posicaoFinal){
            retorno += palavra[i];
        }
    }
    console.log(retorno);

}
subString('Mozilla',0,4); */

// Kata 6

/* function stringRepeater (frase, number){
    let retorno = '';
    for( let i = 1; i <= number; i++){
        retorno = retorno + frase;
        
    }
console.log(retorno);
}

stringRepeater("Because I'm happy. ", 3); */

// Kata 7

/* function stringCentralizer (palavra,repeticao,elemento){
    let retornoElmento = '';
    let string = '';
    for (let i = 1; i <= repeticao; i++){
        retornoElmento += elemento; 
    }
    string = `${retornoElmento} ${palavra} ${retornoElmento}`;
    console.log(string);
}
stringCentralizer('Java',8,'=') */