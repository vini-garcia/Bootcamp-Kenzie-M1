let secoesMercado = ['um', 'dois', 'três'];
let hortifruti = ['pera', 'uva'];
let acougue = [];
let padaria = [];
let adegaEBebidas = [];
let laticiniosEFrios = [];

// function adicionarSecaoAoMercado(secao){
//     secoesMercado.push(secao);
//     return secoesMercado;
// }
// console.log(adicionarSecaoAoMercado()) 

// function adicionarItemASecao(novoItem, secao){
//     secao.push(novoItem);
//     return secao;
// }
// console.log(adicionarItemASecao())

// function retornarItemDaSecao(nomeItem, secao){   
//    return secao.indexOf(nomeItem);
// }
// console.log(retornarItemDaSecao())

// function retornaUtlimoItemDaSecao(secao){
//     return secao[secao.length-1];
// }
// console.log(retornaUtlimoItemDaSecao(hortifruti))

// function consultaSecoesMercado(secoesMercado){
//     for(let i = 0; i < secoesMercado.length; i++){
//         console.log(secoesMercado);
//         return;
//     }
// }
// console.log(consultaSecoesMercado(secoesMercado))

// function somaItens(totalA, totalB){
//         return totalA + totalB;    
// }
// console.log(somaItens(1,1))

// const funcionarios = ["Sônia", "Cage", "Alex", "Liu Ken"];
// function baterPonto(nome, numeroFicha){
//     for (let i = 0; i < funcionarios.length; i++)
//         if(nome == funcionarios[i]){
//         return "Turno processado"
//     }else{
//         return "Funcionario não cadastrado"
//     }
// }
// console.log(baterPonto('Sônia', 0))

const listaUsuarios = ["luffy123", "acer321", "nami"]
function loginSistema(nomeUsuario, senhaUsuario){
    for(let i = 0; i < listaUsuarios.length; i++){
        if(nomeUsuario == 'luffy123' && senhaUsuario == "326541"){
            return "Acesso liberado"
        }else if (nomeUsuario == 'acer321' && senhaUsuario == "741258"){
                return "Acesso liberado"
        }else if(nomeUsuario == 'nami' && senhaUsuario == "963258"){
                return "Acesso liberado"
        }
        
    }
    return 'Acesso negado'
}
console.log(loginSistema('luffy123', '326541'))