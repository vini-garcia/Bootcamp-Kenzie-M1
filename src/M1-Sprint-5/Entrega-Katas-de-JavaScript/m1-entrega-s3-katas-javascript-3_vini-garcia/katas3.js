// Kata 1

let frutas = ["laranja", "abacaxi", "acerola", "morango", "uva", "melancia"];

function vowelsCount (lista){
    
    let numVogais = [];

    for (let i = 0; i < lista.length; i++){
        let contVogais = 0;
        for(let j = 0; j < lista[i].length; j++)
        if (lista[i][j] == 'a' || lista[i][j] == 'e' || lista[i][j] == 'i' || lista[i][j] == 'o' || lista[i][j] == 'u'){
            contVogais ++;
                       
        }
        numVogais.push(contVogais);
        } 
    console.log(numVogais)
}
vowelsCount(frutas)


// Kata 2

let declaracao = 'Os três mosqueteiros';

function stringTripletGroup (frase){
    let tresCarac = [];    
    let count = 0;
    let letras = '';
    if (frase.length % 3 == 1){
        frase += ' '

    }else if (frase.length % 3 == 2){
        frase+= '  '
    }

    for (let i = 0; i < frase.length; i++){                
        count++;
        letras = letras + frase[i];         
        if (count % 3 == 0){             
            tresCarac.push(letras);
            letras = '';            
        }
              
    }
    return tresCarac
}    
console.log(stringTripletGroup(declaracao))


// Kata 3
let animais = ["DoG", "cat", "cAT", "dOg", "cat", "Dog", "caT",];
let dog = 0;
let cat = 0;
function dominantPet (lista){
    for (let i = 0; i < lista.length; i++){
        if (lista[i].toLowerCase() == 'cat'){
            cat ++
        }else if (lista[i].toLowerCase() == 'dog'){
            dog ++
        }
    }
    if (dog < cat){
        return 'CAT!'
    }else if (dog > cat){
        return 'DOG!'
    }else {
        return 'DRAW!'
    }
}

console.log(dominantPet(animais))

// Kata 4

let numeros4 = [14, 25, 32, 50, 35, 30];
let divisor = 5;
let arr4 = [];
function divisibleList (lista, numero){
    for (let i = 0; i < lista.length; i++){
        if (lista[i] % numero == 0){
            arr4.push(lista[i])
        }

    } return arr4
}

console.log(divisibleList(numeros4,divisor))

// Kata 5

let arr5 =[];
function trustMeOrNot (bool, numero){
    for (let i = 1; i <= numero; i++){
        arr5.push(bool);
        }
        return arr5
}
console.log(trustMeOrNot(true,8))


// Kata 6

let listaLampadas = [false, false, true, false, true, true, true];
let lista6 = [];
function changeLampStatus (lista){
    for (let i = 0; i < lista.length; i++){
        if (lista[i] == false){
            lista6.push(true);
        }else if (lista[i] == true){
            lista6.push(false);
        }
    }return lista6
}
console.log(changeLampStatus(listaLampadas))

// Kata 7

let listaGrade = [6.0, 5.5, 6.7, 8.0, 10, 10, 7.1];

function averageGrade (lista){
    let media7 = '';
    let soma7 = 0;
    for (let i = 0; i <lista.length; i++){
        
        soma7 += lista[i]        
    }
    media7 = soma7 / lista.length;
    media7 = media7.toFixed(2)

    return `A média das notas é ${media7}` 

}
console.log(averageGrade(listaGrade))

// Kata 8

let listaCanvas = [3, 9.5, 6, 8, 10, 10, 7.1, 8.5, 2.3, 6.7];
function canvasDeliveriesPercentage (lista){
    let soma8 = 0;
    let media8 = 0;
for (let i = 0; i < lista.length; i++){
    soma8 += lista[i];
    
}
    media8 = soma8 / lista.length;
    media8 = media8/10*100;
    media8 = media8.toFixed(2);
    return `A porcentagem total de entregas atingida é: ${media8}%`
} 
console.log(canvasDeliveriesPercentage(listaCanvas))
