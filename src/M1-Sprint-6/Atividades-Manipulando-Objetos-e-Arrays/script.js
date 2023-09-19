let departmentList = [
    {
      departmentName: 'Financial',
      employees:
      [
        {
          name: 'Rose',
          age: 26,
          responsibility: 'Financial director',
          salary: 5600
        },
        {
          name: 'Stevem',
          age: 32,
          responsibility: 'Financial manager',
          salary: 4200
        },
        {
          name: 'Beca',
          age: 26,
          responsibility: 'Financial analyst',
          salary: 2800
        }
      ],
      working: true
    },
    {
      departmentName: 'Expedition',
      employees:
      [
        {
          name: 'Rooper',
          age: 35,
          responsibility: 'Expedition director',
          salary: 5600
        },
        {
          name: 'Maggie',
          age: 22,
          responsibility: 'Expedition manager',
          salary: 4200
        },
        {
          name: 'Thompson',
          age: 41,
          responsibility: 'Expedition analyst',
          salary: 2800
        }
      ],
      working: true
    },
    {
      departmentName: 'Capitation',
      employees:
      [
        {
          name: 'Saory',
          age: 35,
          responsibility: 'Capitation director',
          salary: 5600
        },
        {
          name: 'Silvia',
          age: 22,
          responsibility: 'Capitation manager',
          salary: 4200
        },
        {
          name: 'Sonem',
          age: 41,
          responsibility: 'Capitation analyst',
          salary: 2800
        },
        {
          name: 'Havi',
          age: 41,
          responsibility: 'Trainee Capitation manager',
          salary: 1500
        },
        {
          name: 'Margie',
          age: 25,
          responsibility: 'Capitation analyst',
          salary: 2800
        },
        {
          name: 'Victoria',
          age: 18,
          responsibility: 'Trainee Capitation analyst',
          salary: 1500
        }
      ],
      working: true
    },
  ];

  function howManyDepartments (lista){
    let count = 0;
    for (let i = 0; i < lista.length; i++){
        if (lista[i].departmentName != undefined){
            count++
        }
    } return count
    
  };
  console.log(howManyDepartments(departmentList));


  function changeDepartmentName (nomeAtual, novoNome){
    for (let i = 0; i < departmentList.length; i++){
        if(nomeAtual == departmentList[i].departmentName){
            departmentList[i].departmentName = novoNome
           return departmentList[i]
        }
    } return 'Departament not found'
  }
  console.log(changeDepartmentName('Capitation', 'Prospecção'))


  function giveTheDepartmentABreak (nomeDepartamento){
    let posicao = 0;
    for (let i = 0; i < departmentList.length; i++){
        if(departmentList[i].departmentName == nomeDepartamento){
        posicao = i;
        }
    }
    if(departmentList[posicao].working == true){
        departmentList[posicao].working = false;
    }else if (departmentList[posicao].working == false){
        departmentList[posicao].working = true;
    }return departmentList[posicao].working;
  };
  console.log(giveTheDepartmentABreak('Financial'))


  function howManyEmployeesInDepartment (nomeDepartamento){
    let posicao = 0;
    for (let i = 0; i < departmentList.length; i++){
        if(departmentList[i].departmentName == nomeDepartamento){
        posicao = i;
        }
        let count = 0;
        for (let j = 0; j < departmentList[posicao].employees.length; j++){
            if(departmentList[posicao].employees[j].name != undefined){
                count++;
        } 
            
        } return count;
    }
    
    return 'Departament not found';
  }
  console.log(howManyEmployeesInDepartment('Expedition'));

let pessoa = {
    nome: 'Vinicius',
    age: 33,
    responsability: 'Chefe da porra toda',
    salary: 100000.00
}

  function insertNewEmployeeInDepartment (nomeDepartamento, pessoa){
    let posicao = 0;
    for (let i = 0; i < departmentList.length; i++){
        if(departmentList[i].departmentName == nomeDepartamento){
        posicao = i;
        departmentList[i].employees.push(pessoa)
        }
        return departmentList[i]

    }
    return 'Departament not found';
  }
  console.log(insertNewEmployeeInDepartment( 'Financial', {name:'Rosemary', age:44, responsibility: 'Financial expedition director', salary: 15600}))