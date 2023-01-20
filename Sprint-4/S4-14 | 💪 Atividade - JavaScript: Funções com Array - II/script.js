const listaDeElementos = [1,5,7,9,3, "10", "11", "15"];


// Kata 1

/*     function retornaTodosElementos (){
        alert(`${listaDeElementos}`);
    }
retornaTodosElementos(); */

// Kata 2

/* let n = parseInt(prompt('Digite um número'));
    function retornaValorEpecifico (n){
        return listaDeElementos[n];
    }
console.log(retornaValorEpecifico(n)) */

// Kata 3

/* let n = parseInt(prompt('Digite um número'));
    function retornarTipoElemento (n){
        if (n < listaDeElementos.length && typeof(listaDeElementos[n]) == 'string'){
            return 'O elemento é uma string';
        }else if (n < listaDeElementos.length && typeof(listaDeElementos[n]) == 'number'){
            return 'O elemento é um número';
        }else{
            return 'Número inválido';
        }
    }
console.log(retornarTipoElemento(n)); */

// Kata 4

/*     function removeUltimoElementoString (){
        if (typeof(listaDeElementos[listaDeElementos.length-1]) == 'string'){
            listaDeElementos.pop();
            return 'Elemento deletado com sucesso';
        }else {
            return 'Falha ao remover elemento da lista';
        }
    }
    console.log(removeUltimoElementoString()); */


// Kata 5

/* let n = prompt('Digite um valor');
    function consultaPosição (n){
        for (let i = 0; i < listaDeElementos.length; i++)
            if (n == listaDeElementos[i]){
                return `O valor procurado está na posição ${i}`;
            }
        return 'Valor não encontrado'
    }

    console.log(consultaPosição(n)); */

// Kata 6


/* let valor = parseInt(prompt('Digite o valor aqui'))
function removerElementoEspecifico (valor){
    let indice = listaDeElementos.indexOf(valor);
    for (let i = 0; i <= listaDeElementos.length; i++)
    if (listaDeElementos[i] == valor){
        listaDeElementos.splice(indice, 1)
        return `Elemento ${valor} deletado com sucesso`
    }
    return 'Elemento não encontrado'
}
console.log(removerElementoEspecifico(valor)) */


// Kata 7

/* let n = prompt('Digite algo');
function inserirNaPosicaoCorreta(valor) {
  for (i = 0; i <= 10; i++) {
    if (valor == i) {
      valor = parseInt(valor);
      listaDeElementos.unshift(valor);
      return 'Lista atualizada com sucesso.';
    }
  }
  if (typeof valor == 'string') {
    listaDeElementos.push(valor);
    return 'Lista atualizada';
  } else {
    return 'Valor inválido';
  }
}
alert(inserirNaPosicaoCorreta(n));
console.log(listaDeElementos); */   