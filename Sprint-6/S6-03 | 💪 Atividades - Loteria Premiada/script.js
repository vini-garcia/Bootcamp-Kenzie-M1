let ganhador = {
    nome: 'Adamastor',
    nascimento: '16/09/1986',
    cpf: '123.321.789-98',
    estadoCivil: 'Casado'
};

function verificarGanhador (nome, cpf){
    nome = nome.toLowerCase();
    ganhador.nome = ganhador.nome.toLowerCase();

    if (nome == ganhador.nome && cpf == ganhador.cpf){
        return `${nome[0].toUpperCase()}${nome.slice(1)} é o ganhador`;
    }else{
        return 'Não é ganhador!';
    }
}
console.log(verificarGanhador('adamastor', '123.321.789-98'));

let perdedores = [
    {
        nome: 'Vini',
        cpf: '123'
    },
    {
        nome: 'Mama',
        cpf: '123'
    },
    {
        nome: 'Rui',
        cpf: '123'
    },
    {
        nome: 'Adamastor',
        cpf: '123.321.789-98'
    }
];

function perdeu (pessoa){
    let count = 0;
    for (let i = 0; i < pessoa.length; i++){
        if (pessoa[i].nome != ganhador.nome && pessoa[i].cpf != ganhador.cpf){
            count++
        
        }
    }
    return count
    
}
console.log(perdeu(perdedores))

