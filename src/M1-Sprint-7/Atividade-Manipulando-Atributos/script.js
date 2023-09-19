const users = [
    {
     name: 'Madalena',
     profile: 'Admin',
     sector: 'Administration'
   },
   {
     name: 'Rafael',
     profile: 'user',
     sector: 'Finance'
   },  
   {
     name: 'Baltazar',
     profile: 'user',
     sector: 'Reception'
   },  
   {
     name: 'Carmen',
     profile: 'Admin',
     sector: 'Business'
   }    
 ]

 let main = document.querySelector('main');

 let ul = document.createElement('ul');
main.appendChild(ul);

function criarCards (lista){
  for(let i = 0; i < lista.length; i++){
    let pessoa = lista[i]
    let li = document.createElement('li');
    li.innerHTML = pessoa.name;
    if(pessoa.profile == 'Admin' && pessoa.sector == 'Administration'){
      li.className = 'purple';
    }else if(pessoa.profile == 'Admin'){
      li.className = 'yellow';
    }else if(pessoa.profile == 'user'){
      li.className = 'green';
    }
    ul.appendChild(li);
  }
  
}
criarCards(users);