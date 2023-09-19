const alunoCurso = {
    nome: "João",
    idade: 31,
    curso: "FullStack",
    instituicao: "Kenzie Br",
    materias: ["Html", "Css", "JavaScript", "Python"],
    situacaoMatricula: true,
  };

  let tipoDeConsulta = '';

  function getTheCurse (aluno){
    tipoDeConsulta = parseInt(prompt('Digite o número referente ao tipo de consulta desejada: 1 - Curso | 2 - Matéria | 3 - Situação de Matrícula | 4 - Gerar Carteira'));
        if(tipoDeConsulta == 1){
            alert(aluno.curso);
        }
        else{
            alert('Utilize outra função');
        }
    }
    //getTheCurse(alunoCurso);

    function getTheSubjects (aluno){
        tipoDeConsulta = parseInt(prompt('Digite o número referente ao tipo de consulta desejada: 1 - Curso | 2 - Matéria | 3 - Situação de Matrícula | 4 - Gerar Carteira'));
        if(tipoDeConsulta == 2){
            alert(aluno.materias);
        }
        else{
            alert('Utilize outra função');
        }
    }
    //getTheSubjects(alunoCurso);


    function resgistrationStatus (aluno){
        tipoDeConsulta = parseInt(prompt('Digite o número referente ao tipo de consulta desejada: 1 - Curso | 2 - Matéria | 3 - Situação de Matrícula | 4 - Gerar Carteira'));
        if(tipoDeConsulta == 3){
            if(aluno.situacaoMatricula == true){
                alert('Ativo');
            }
            else{
                alert('Inativo');
            }
                        
        }
        else{
            alert('Utilize outra função');
        }
    }
    //resgistrationStatus(alunoCurso);


    function generateStudentCard (aluno){
        tipoDeConsulta = parseInt(prompt('Digite o número referente ao tipo de consulta desejada: 1 - Curso | 2 - Matéria | 3 - Situação de Matrícula | 4 - Gerar Carteira'));
        if(tipoDeConsulta == 4){
            alert(`Nome do aluno: ${aluno.nome}, idade: ${aluno.idade}, curso: ${aluno.curso}, instituição: ${aluno.instituicao}.`);
        }
        else{
            alert('Utilize outra função');
        }
    }
    //generateStudentCard(alunoCurso);