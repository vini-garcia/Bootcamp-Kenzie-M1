const produtosCotacao = [];
function insereProduto(produto){    
    produtosCotacao.push(produto);
    return produtosCotacao 
};
insereProduto({
    preco: 100,
    quantidade: 10, 
    nome: "Soja 25kg"
});


let produto = {
  
    criaProduto: function(preco, quantidade, nome){
        this.preco = preco;
        this.quantidade = quantidade;
        this.nome = nome;
        return produto;
    }
    
}

produto.criaProduto(200, 150, "Feijão 25kg")


let todosProdutos = insereProduto(produto);

function renderizaProdutos(todosProdutos){
    for (let i = 0; i <= todosProdutos.length; i++){
        console.log(todosProdutos[i].preco)
    }
}

//renderizaProdutos(todosProdutos)


let listaServico = {
    servico:'',
    tipo: '',
    valor: 0,
}

function cadastraServicos(servico, tipo, valor){
        
    listaServico.servico.push(servico);
    listaServico.tipo.push(tipo);
    listaServico.valor.push(valor);
    return listaServico
}
//chamada da função
console.log(cadastraServicos("Pulverização", "Gafanhotos", 50))
