function add (a, b){
    let soma = a+b;
    return soma
}
console.log(add(2,4))

function multiply (c,d){
    let multiplicacao = 0;
    for ( let i = 1; i <= d; i++){          
        multiplicacao = add(c, multiplicacao)
    }
      
        return multiplicacao;
}
console.log(multiply (6,8))

function power (x,n){  
    let potencia = 1;
     for (let i = 1; i <= n; i++){
        potencia = multiply(x, potencia);
    }
    return potencia;
}
console.log(power(2,8));

function factorial (y){
    let fator = y;
    for (let i = y - 1; i > 0; i--){
    fator = multiply(fator, i);
    }
    return fator
}
console.log(factorial(4))