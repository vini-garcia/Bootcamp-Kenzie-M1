let tasks = [
    {
      titulo: "Comprar comida para o gato",
      tipo: "Urgente"
    },
    {
      titulo: "Limpar o quarto",
      tipo: "Urgente"
    },  
    {
      titulo: "Consertar Computador",
      tipo: "Prioritário"
    },  
    {
      titulo: "Guardar dinheiro do lanche",
      tipo: "Urgente"
    },  
    {
      titulo: "Beber água",
      tipo: "Prioritário"
    }    
  ];

let prioridadeUrgente = [];
let prioridadePrioritario = [];
let prioridadeNormal = [];
function prioridades(lista) {
  for (i = 0; i < lista.length; i++) {
    if (lista[i].tipo == 'Urgente') {
      prioridadeUrgente.push(lista[i]);
    } else if (lista[i].tipo == 'Prioritário') {
      prioridadePrioritario.push(lista[i]);
    } else if (lista[i].tipo == 'Normal') {
      prioridadeNormal.push(lista[i]);
    }
  }
}
prioridades(tasks);

let prioridadesCertas = prioridadeUrgente.concat(prioridadePrioritario, prioridadeNormal)


let btn_add = document.querySelector('.button_adicionar');
let inputTitulo = document.querySelector('.input_titulo');
let prioridade = document.querySelector('.select_list');
let ul_tarefas = document.querySelector('.ul_tarefas');
let pteste = document.querySelector('#pteste')

let teste = [];
btn_add.addEventListener('click', function(event){
  pteste.innerHTML = inputTitulo.value
  teste.push(pteste)
})


// function reloadList() {
//   for (let index = 0; index < tasks.length; index++) {
//     let currentElement = tasks[index];
//     currentElement.id = index;
//     tasks.appendChild(currentElement);
//   }
// }

// function createRemoveButton() {
//   const removeButton = document.createElement("button"); // Criamos um botão
//   removeButton.setAttribute('class', 'button_li');
//   let img = document.createElement('img');
//   img.setAttribute('class', 'img_li');
//   img.src = './img/lixeira.svg';
//   img.alt = 'Lixeira';
//   removeButton.ariaHasPopup(img)
//   removeButton.addEventListener("click", (e) => { // Adicionamos um evento nele.

//     tasks = tasks.filter((_, index) => index !== Number(e.path[1].id));
//     reloadList(); // Chamamos a função para recarregar a lista.
//   });
//   return removeButton;
//   }


//   function onClickFunction() {
//     let newItem = document.createElement("li");   //Criando um elemento html "li"
//     let paragraph = document.createElement("p");  //Criando um elemento html "p"
//     let removeButton = createRemoveButton();
            
//     if (input.value) {
//     paragraph.innerText = input.value; // Adicionamos o valor do input em nosso "p"
  
//     newItem.appendChild(paragraph); // Colocamos nosso paragraph dentro de nossa li
//     newItem.appendChild(removeButton);// Colocamos nosso button dentro de nossa li
  
//     input.value = ""; // Limpamos nosso input
//     tasks.push(newItem);
  
//     reloadList();
//     }
//   }
//   btn_add.addEventListener("click", onClickFunction);









// function newTask (lista){
//   for(let i = 0; i < lista.length; i++){
//     let tarefa = lista[i];

//     let li = document.createElement('li');
//     li.setAttribute('class', 'li_tarefas');
//     li.innerHTML = inputTitulo.value

//       let btn = document.createElement('button');
//       btn.setAttribute('class', 'button_li');

//       li.appendChild(btn);

//         let img = document.createElement('img');
//         img.setAttribute('class', 'img_li');
//         img.src = './img/lixeira.svg';
//         img.alt = 'Lixeira';

//         btn.appendChild(img);

//         let ul = document.querySelector('.ul_tarefas');
//         ul.appendChild(li);
//   }
// }
// newTask();
// newTask(prioridadePrioritario);
// newTask(prioridadeNormal);

// btn_add.addEventListener('click', function(event){
//   newTask();
// })





// btn_add.addEventListener('click', function(event){
//   let li_tarefas = document.createElement('li');
//   li_tarefas.setAttribute('class', 'li_tarefas');
//   li_tarefas.innerHTML = inputTitulo.value;

//   ul_tarefas.appendChild(li_tarefas);

//   let button_li = document.createElement('button');
//   button_li.setAttribute('class', 'button_li');

//   li_tarefas.appendChild(button_li);

//   let img_li = document.createElement('img');
//     img_li.setAttribute('class', 'img_li');
//     img_li.src = './img/lixeira.svg';
//     img_li.alt = 'Lixeira';

//     li_tarefas.appendChild(img_li)

// })
