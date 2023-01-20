let pessoa = {
    nome: '',
    anoDeNascimento: 0,
    cidade: '',
    criarPessoa: function (nome, nasc, city){
    this.nome = nome;
    this.anoDeNascimento = nasc;
    this.cidade = city;
    return pessoa        
    },
    apresentar: function (nome, nasc, city){
    return `${nome} possui ${2022 - nasc} anos de idade e atualmente está morando em ${city}`
    }
};
//console.log(pessoa.apresentar('Vinicius', 1989, 'Curitiba'))


let elevador = {
    andarAtual: 2,
    totalDeAndares: 20,
    capacidadeDoElevador: 15,
    ocupacaoAtual: 2,
    entrar: function (){
        if (this.ocupacaoAtual < this.capacidadeDoElevador){
            this.ocupacaoAtual++;
            return `Ocupação atual em ${this.ocupacaoAtual}`;
        }else {
            return 'Elevador lotado';
        }
    },
    sair: function (){
        if (this.ocupacaoAtual > 1){
            this.ocupacaoAtual--;
        return `Ocupação atual em ${this.ocupacaoAtual}`;
    }else {
        return 'O elevador encontra-se vazio'
    }
    },
    subir: function (){
        if (this.andarAtual < this.totalDeAndares){
            this.andarAtual++
        return `Estamos no andar ${this.andarAtual}`;
    }else {
        return 'O elevador encontra-se no último andar';
        }
    },
    descer: function (){
        if (this.andarAtual > 1){
            this.andarAtual--
        return `Estamos no andar ${this.andarAtual}`;
    }else {
        return 'O elevador encontra-se no andar térreo';
    }
        }
};

//console.log(elevador.descer())

let tv = {
    canalAtual: 2,
    volume: 2,
    aumentarVolume: function(){
        if (this.volume < 10){
            this.volume++;
            return `O volume está em ${this.volume}`;
        }else {
            return 'Volume no máximo';
        }
    },
    diminuirVolume: function(){
        if (this.volume > 1){
            this.volume--;
            return `O volume está em ${this.volume}`;
        }else {
            return 'Volume no mínimo';    
        }
    },
    mudarCanalParaCima: function(){
        if (this.canalAtual < 100){
            this.canalAtual++;
            return `O canal atual é ${this.canalAtual}`;
        }else {
            return 'Este já é o úlimo canal';
        }    
    },
    mudarCanalParaBaixo: function(){
        if (this.canalAtual > 1){
            this.canalAtual--;
            return `O canal atual é ${this.canalAtual}`;
        }else {
            return 'Este é o primeiro canal';
        }    
    },
    consultarCanal: function(){
        return this.canalAtual
    },
    consultarVolume: function(){
        return this.volume

    }
};
//console.log(tv.consultarVolume())
