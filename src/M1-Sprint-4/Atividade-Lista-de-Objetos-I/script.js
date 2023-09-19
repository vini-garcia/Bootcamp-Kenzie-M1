let dadosPessoa = {
nome: 'Vinicius Garcia',
anoDeNascimento: 1989,
cpf: 123435454,
cidade: 'Curitiba',
estado: 'Paraná',
logradouro: 'Benjamin Granatto'
};

let dadosEscola = {
    nome: 'Positivo',
    cnpj: 1234345465,
    areaDeAtuacao: 'Ensino pós graduação',
    cidade: 'Curitiba',
    estado: 'Paraná',
    logradouro: 'Rua tal coisa',
    curso: 'Direito'
};

let dadosCurso = {
    nome: 'Direito',
    duracaoEmAnos: 5,
    turma: 123,
    modulos: 10
};

let dadosEndereco = {
    cidade: 'Curitiba',
    estado: 'Paraná',
    logradouro: 'Rua das Flores',
    cep: 0123435
};

const figure = {  
    name: "Carl",   
    classes: ["Warrior", 'Barbarious'],  
    leader_trend: true,
    power: 6, 
    allied: true
}

function returnName (){
    return figure.name
}
// console.log(returnName())

function verifyClasses (){
    return figure.classes
}
// console.log(verifyClasses())

function realPower (){
    if (figure.leader_trend == true){
        return figure.power ** 2
    }else {
        return figure.power
    }
}
// console.log(realPower())

function insertNewClass (addNewClass){
    if(addNewClass != 'Warrior' && addNewClass != 'Barbarious' && addNewClass != 'Arch' && addNewClass != 'Hunter' && addNewClass !== 'Survivor'){
        return 'Classe não permitida'
    }
    if (figure.classes.length >= 3){
        return 'Este personagem não pode estar em mais classes';
    }
    if (figure.classes.length < 3){
        
            if (addNewClass == figure.classes[0] || addNewClass == figure.classes[1]|| addNewClass == figure.classes[2]){
                return `O personagem já pertence a classe ${addNewClass}`;
            }
            else{
                figure.classes.push(addNewClass);
                return `Classe ${addNewClass} inserida com sucesso`;    
            
                }
            }

}
// console.log(insertNewClass('Arch'))


function noMoreBarbarious (lista){
    if(lista.allied == true){
        for (let i = 0; i < lista.classes.length; i++){
            if(lista.classes[i] == 'Barbarious'){
                lista.allied = false;
                return `O ${figure.name} agora é um inimigo`;
            }
        } 
    }return `O ${figure.name} já era um inimigo`
}
// console.log(noMoreBarbarious(figure))

