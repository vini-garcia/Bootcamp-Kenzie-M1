// Kata 1

let listaAlunos = [
    {
        nome: 'João',
        curso: 'Ciencia da Computação',
        turno: 'Noturno',
        mediaCorte: 7,
        materias: [
            {
                nome: 'Calculo I',
                avaliacoes: [10, 10, 1, 1]
            },
            {
                nome: 'Pensamento Computacional',
                avaliacoes: [6, 8, 6, 8]
            },
            {
                nome: 'Linguagem Orientada a Objetos',
                avaliacoes: [7, 8, 9, 10]
            },
            {
                nome: 'Arquitetura de Organização de Computadores',
                avaliacoes: [6, 8, 7, 8]
            }
        ]
    }
];

function mediasAprovado (lista){
    let somaNotas = 0;
    let mediaNotas = 0;
    let count = 0;
    let materiasAprovado = 0;
    for (i = 0; i < lista[0].materias.length; i++){
        for(j = 0; j < lista[0].materias[i].avaliacoes.length; j++){
        somaNotas += lista[0].materias[i].avaliacoes[j];
        count++;
        }  
        mediaNotas = somaNotas / count;
        somaNotas = 0;
        count = 0;
        if(mediaNotas >= listaAlunos[0].mediaCorte){
        materiasAprovado++
        }      
    }
    return `O aluno ${lista[0].nome} está aprovado em ${materiasAprovado} matérias.`
}
// console.log(mediasAprovado(listaAlunos))

// Kata 2

function calculaMedia (lista, semestre){
    let somaNotas = 0;
    let mediaNotas = 0;
    let count = 0;
    let materiasAprovado = 0;
    if (semestre == 1){
        for (i = 0; i < lista[0].materias.length; i++){
            for(j = 0; j < 2; j++){
            somaNotas += lista[0].materias[i].avaliacoes[j];
            count++;
            }  
            mediaNotas = somaNotas / count;
            somaNotas = 0;
            count = 0;
            if(mediaNotas >= listaAlunos[0].mediaCorte){
            materiasAprovado++
            }    
        }return `O aluno ${lista[0].nome} está aprovado em ${materiasAprovado} matérias.`  
    }  
    else if( semestre == 2){
        for (i = 0; i < lista[0].materias.length; i++){
            for(j = 2; j < lista[0].materias[i].avaliacoes.length; j++){
            somaNotas += lista[0].materias[i].avaliacoes[j];
            count++;
            }  
            mediaNotas = somaNotas / count;
            somaNotas = 0;
            count = 0;
            if(mediaNotas >= listaAlunos[0].mediaCorte){
            materiasAprovado++
            }    
        }return `O aluno ${lista[0].nome} está aprovado em ${materiasAprovado} matérias.`  
    }
    
}
// console.log(calculaMedia(listaAlunos, 1))

// Kata 3

const onibus = {
    capacidade: 40,
    origem: 'Curitiba-PR',
    destino: 'Rio de Janeiro-RJ',
    paradas: [
        'São Paulo-SP',
        'Campinas-SP',
        'São José dos Campos-SP',
        'Volta Redonda-RJ'
    ],
    passageiros: [
        {
            nome: 'Luis da Silva',
            rg: '1234567890',
            bilhete: {
                origem: 'Curitiba-PR',
                destino: 'São José dos Campos-SP',
                poltrona: 15,
            }
        },
        {
            nome: 'João da Silva',
            rg: '1234567891',
            bilhete: {
                origem: 'São Paulo-SP',
                destino: 'Rio de Janeiro-RJ',
                poltrona: 16,
            }
        }
     ],
     verParada: function (paradaAtual){
        let quemDesce = [];
        for (let i = 0; i < this.paradas.length; i++){
            if (paradaAtual == this.paradas[i] || paradaAtual == this.destino){
                for (let j = 0; j < this.passageiros.length; j++){
                    if(paradaAtual == this.passageiros[j].bilhete.destino){
                    quemDesce.push(this.passageiros[j]);
                    }
                }
                return quemDesce
            }
                   
        }
        return 'Cidade informada não é uma parada deste ônibus'
    } 
};

console.log(onibus.verParada('São José dos Campos-SP'))
