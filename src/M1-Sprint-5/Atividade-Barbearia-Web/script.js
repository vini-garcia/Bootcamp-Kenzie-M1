const barbearia = {
    cortes: [
      { id: 1, tipo: "Militar", valor: 20.0 },
      { id: 2, tipo: "Samurai", valor: 35.0 },
      { id: 3, tipo: "Pompadour", valor: 20 },
      { id: 4, tipo: "Moicano", valor: 0 },
      { id: 5, tipo: "Razor part", valor: 0 },
    ],
  
    barbas: [
      { id: 1, tipo: "Capitão Jack", valor: 20.0 },
      { id: 2, tipo: "Van Dyke", valor: 20.0 },
      { id: 3, tipo: "Barba Média", valor: 20.0 },
      { id: 4, tipo: "Barba Baixa", valor: 20.0 },
      { id: 5, tipo: "Barba Zero", valor: 15.0 },
    ],
    estaAberto: true,
  };
  
  
  function buscaCortePorId(id) {
    let retorno = 'Corte não encontrado';
    for (i = 0; i <= barbearia.cortes.length-1; i++){
      if (id == barbearia.cortes[i].id){
        retorno = barbearia.cortes[i];
        }
    } return retorno
  }
  //console.log(buscaCortePorId(1));
  
  
  function buscaBarbaPorId(id) {
    let retorno = 'Barba não encontrado';
    for (i = 0; i <= barbearia.barbas.length-1; i++){
      if (id == barbearia.barbas[i].id){
        retorno = barbearia.barbas[i];
        }
    } return retorno
  }
  //console.log(buscaBarbaPorId(1))


  function verificaStatusBarbearia() {
    if (barbearia.estaAberto == true){
        return 'Estamos abertos';
    }else {
        return 'Estamos fechados'
    }
  }
  //console.log(verificaStatusBarbearia())


  
  function retornaTodosCortes() {
    let arr = [];
    for (i = 0; i <= barbearia.cortes.length-1; i++){
        arr.push(barbearia.cortes[i])
    }return arr
  }
  //console.log(retornaTodosCortes())
  
  function retornaTodasBarbas() {
    let arr = [];
    for (i = 0; i <= barbearia.barbas.length-1; i++){
        arr.push(barbearia.barbas[i])
    }return arr
  }
  //console.log(retornaTodasBarbas())


  function criaPedido(nomeCliente, corteId, barbaId) {
    let corte = ''; 
    let barba = '';
    corte = buscaCortePorId(corteId);
    barba = buscaBarbaPorId(barbaId);
    let pedido = {
        nome: nomeCliente,
        pedidoCorte: '',
        pedidoCortePreco: '',
        pedidoBarba: '',
        pedidoBarbaPreco: ''
    }   

    pedido.pedidoCorte = buscaCortePorId(corteId).tipo;
    pedido.pedidoCortePreco = buscaCortePorId(corteId).valor;
    pedido.pedidoBarba = buscaBarbaPorId(barbaId).tipo;
    pedido.pedidoBarbaPreco = buscaBarbaPorId(barbaId).valor;
    return pedido; 
/*     for (i = 0; i <= barbearia.cortes.length-1; i++)
    for (j = 0; j <= barbearia.barbas.length-1; j++){
        if (corteId == barbearia.cortes[i].id || barbaId == barbearia.barbas[j].id){
            pedido.pedidoCorte = barbearia.cortes[i].tipo
            pedido.pedidoCortePreco = barbearia.cortes[i].valor
            pedido.pedidoBarba = barbearia.barbas[j].tipo
            pedido.pedidoBarbaPreco = barbearia.barbas[j].valor
        }
    } return pedido */

}
  // console.log(criaPedido('Vini', 1, 1))
  
  function atualizaPedido(lista, id, valor, tipo){
    barbearia.cortes[id].valor = 29.99;
    barbearia.cortes[id].tipo = 'Emo';
    return barbearia.cortes[id]
  }
//  console.log(atualizaPedido(barbearia, 1, 29.99, 'Emo'))

function calculaTotal (corteId, barbaId){
    let valorSoma = 0;
    valorSoma = barbearia.cortes[corteId].valor + barbearia.barbas[barbaId].valor;
    return valorSoma
}
// console.log(calculaTotal(2,1))


