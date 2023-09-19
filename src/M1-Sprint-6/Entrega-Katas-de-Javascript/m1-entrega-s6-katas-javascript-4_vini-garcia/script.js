
let pessoa = {
  nome: "clara",
  anoNascimento: 1996,
  nomeDeUsuario: "CLARA_GOMES",
  temCarro: true,
  valeCombustivel: "R$ 0,00",
  distanciaDoTrabalho: "120km",
  endereco: []
};

// Kata 1

function normalizarDados (lista){
  let nomePadronizado = `${lista.nome[0].toUpperCase()}${lista.nome.slice(1)}`;
  let usuarioPadronizado = lista.nomeDeUsuario.toLowerCase();
  pessoa.nome = nomePadronizado;
  pessoa.nomeDeUsuario = usuarioPadronizado
  return pessoa
}
console.log(normalizarDados(pessoa));

// Kata 2

let listaDeUsuarios = [];
function criarListaDeUsuarios(usuario){
    if(2023 - usuario.anoNascimento >= 18){
      listaDeUsuarios.push(usuario);
      return listaDeUsuarios;
    }  
  return 'Usuário menor de idade.';
  }
  console.log(criarListaDeUsuarios(pessoa));
// Considerei que a let pessoa é apenas 1 objeto, não uma lista com objetos.


  // Kata 3


  function calcularVale(usuario){
    let valeCombustivelPadronizado = 0;
    let distanciaDoTrabalhoPadronizado = parseInt(pessoa.distanciaDoTrabalho);
    let valorDoLitro = 6.99;
    if(usuario.temCarro == true){
      valeCombustivelPadronizado = (distanciaDoTrabalhoPadronizado * valorDoLitro) * 0.7;
    };
    if(distanciaDoTrabalhoPadronizado > 100){
      valeCombustivelPadronizado += 15.00;
    }
    usuario.valeCombustivel = `R$${valeCombustivelPadronizado.toFixed(2)}` ;
    return usuario.valeCombustivel;
  }
  console.log(calcularVale(pessoa));


  // Kata 4



  let endereco = {
    cidade: 'Curitiba',
    logradouro: 'Rua Dali',
    numero: 10,
    tipo: []
  }      

  
  function atualizarEndereco(tipoEndereço, estadoInformado){
    endereco.tipo.push(tipoEndereço);
    endereco.estado = estadoInformado;
    return endereco;
    }
    console.log(atualizarEndereco('casa', 'Paraná'))


    // Kata 5


  function adicionarEnderecoEmPessoa(usuario, enderecoInformado){
    usuario.endereco.push(enderecoInformado);
    return pessoa; 
    }
    console.log(adicionarEnderecoEmPessoa(pessoa, endereco))
       
       
      