let nome = prompt('Digite seu nome');
for (let i = 0; i <= nome.length-1; i++){
    if (nome.length < 5){
    alert('Nome inválido');
    nome = prompt('Digite seu nome');
    }
};

let presenca = parseInt(prompt('Digite sua presença aqui'));
for (let i = 0; i <= 10; i++){
    if (presenca > 10 || presenca < 0){
    alert('Valor inválido para presença. Digite a presença novamente.');
    presenca = parseInt(prompt('Digite sua presença aqui'));
    }
};

let notaMatematica = parseInt(prompt('Digite sua nota em matemática aqui'));
for (let i = 0; i <= 10; i++){
    if (notaMatematica > 10 || notaMatematica < 0){
    alert('Valor inválido para nota de matemática. Digite a nota novamente.');
    notaMatematica = parseInt(prompt('Digite sua nota em matemática aqui'));
    }
};

let notaPortugues = parseInt(prompt('Digite sua nota em português aqui'));
for (let i = 0; i <= 10; i++){
    if (notaPortugues > 10 || notaPortugues < 0){
    alert('Valor inválido para nota de Português. Digite a nota novamente.');
    notaPortugues = parseInt(prompt('Digite sua nota em português aqui'));  
  }
};

let notaInformatica = parseInt(prompt('Digite sua nota em informática aqui'));
for (let i = 0; i <= 10; i++){
    if (notaInformatica > 10 || notaInformatica < 0){
    alert('Valor inválido para nota de Informática. Digite a nota novamente.');
    notaInformatica = parseInt(prompt('Digite sua nota em informática aqui'));
    }
};

let notaGeografia = parseInt(prompt('Digite sua nota em geografia aqui'));
for (let i = 0; i <= 10; i++){
    if (notaGeografia > 10 || notaGeografia < 0){
    alert('Valor inválido para nota de Geografia. Digite a nota novamente.');
    notaGeografia = parseInt(prompt('Digite sua nota em geografia aqui'));
    }
};

let notaIngles = parseInt(prompt('Digite sua nota em inglês aqui'));
for (let i = 0; i <= 10; i++){
    if (notaIngles > 10 || notaIngles < 0){
    alert('Valor inválido para nota de Inglês. Digite a nota novamente.');
    notaIngles = parseInt(prompt('Digite sua nota em inglês aqui'));
    }
};

let notaHistoria = parseInt(prompt('Digite sua nota em história aqui'));
for (let i = 0; i <= 10; i++){
    if (notaHistoria > 10 || notaHistoria < 0){
    alert('Valor inválido para nota de História. Digite a nota novamente.');
    notaHistoria = parseInt(prompt('Digite sua nota em história aqui'));
    }
};

let notaFilosofia = parseInt(prompt('Digite sua nota em filosofia aqui'));
for (let i = 0; i <= 10; i++){
    if (notaFilosofia > 10 || notaFilosofia < 0){
    alert('Valor inválido para nota de Filosofia. Digite a nota novamente.');
    notaFilosofia = parseInt(prompt('Digite sua nota em filosofia aqui'));
    }
};

let notaSociologia = parseInt(prompt('Digite sua nota em sociologia aqui'));
for (let i = 0; i <= 10; i++){
    if (notaSociologia > 10 || notaSociologia < 0){
    alert('Valor inválido para nota de Sociologia. Digite a nota novamente.');
    notaSociologia = parseInt(prompt('Digite sua nota em sociologia aqui'));
    }
};

let notaLiteratura = parseInt(prompt('Digite sua nota em literatura aqui'));
for (let i = 0; i <= 10; i++){
    if (notaLiteratura > 10 || notaLiteratura < 0){
    alert('Valor inválido para nota de Literatura. Digite a nota novamente.');
    notaLiteratura = parseInt(prompt('Digite sua nota em literatura aqui'));
    }
};

let notaEdFisica = parseInt(prompt('Digite sua nota em educação física aqui'));
for (let i = 0; i <= 10; i++){
    if (notaEdFisica > 10 || notaEdFisica < 0){
    alert('Valor inválido para nota de Educação Física. Digite a nota novamente.');
    notaEdFisica = parseInt(prompt('Digite sua nota em educação física aqui'));
    }
};

let somaNotas = notaMatematica + notaPortugues + notaInformatica + notaGeografia + notaIngles + notaHistoria + notaFilosofia + notaSociologia + notaLiteratura + notaEdFisica;
let mediaNotas = somaNotas / 10;

if (mediaNotas >= 8 && presenca >= 6){
    alert(`A nota do aluno ${nome} é de ${mediaNotas} e sua presença de ${presenca}: Aluno aprovado!`);
}else {
    alert(`A nota do aluno ${nome} é de ${mediaNotas} e sua presença de ${presenca}: Aluno reprovado!`);
};



