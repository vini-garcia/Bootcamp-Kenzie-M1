const productsCart = [
    {
        id: 1,
        name: 'Uva',
        price: 5.00
    },
    {
        id: 2,
        name: 'Pão',
        price: 2.00
    },
    {
        id: 3,
        name: 'Queijo',
        price: 7.89
    },
    {
        id: 4,
        name: 'Salame',
        price: 9.15
    },
    {
        id: 5,
        name: 'Pneu',
        price: 500.90
    },
    {
        id: 6,
        name: 'Pinho Sol',
        price: 6.50
    }
]

let main = document.createElement('main');

let div_principal = document.createElement('div');
    div_principal.setAttribute('class', 'div_principal');

    main.appendChild(div_principal);

let header = document.createElement('header');

    div_principal.appendChild(header);

let h1_header = document.createElement('h1');
    h1_header.setAttribute('class', 'h1_header');
    h1_header.innerText = 'Virtual Market',

    header.appendChild(h1_header);

let section_principal = document.createElement('section');
    section_principal.setAttribute('class', 'section_principal');

    div_principal.appendChild(section_principal);

let div_item = document.createElement('div');
    div_item.setAttribute('class', 'div_item');

    section_principal.appendChild(div_item);

let p1 = document.createElement('p');
    p1.setAttribute('class', 'parag_item');
    p1.innerText = 'Item';

    div_item.appendChild(p1);

let p2 = document.createElement('p');
    p2.setAttribute('class', 'parag_valor');
    p2.innerText = 'Valor';

    div_item.appendChild(p2);

let ul_lista = document.createElement('ul');
    ul_lista.setAttribute('class', 'ul_lista');

    section_principal.appendChild(ul_lista);


let soma = 0;
function criarLista(lista){
    for(let i = 0; i < lista.length; i++){
    let item = lista[i];
    soma += item.price

    let li_lista = document.createElement('li');
        li_lista.setAttribute('class', 'li_lista');

        ul_lista.appendChild(li_lista);

    let p3 = document.createElement('p');
        p3.setAttribute('class', 'parag_item');
        p3.innerHTML = item.name;

        li_lista.appendChild(p3);

    let p4 = document.createElement('p');
        p4.setAttribute('class', 'parag_valor');
        p4.innerHTML = `R$ ${item.price.toFixed(2)}`;

        li_lista.appendChild(p4);
    }
}
criarLista(productsCart);

let div_total = document.createElement('div');
    div_total.setAttribute('class', 'div_total');
    
    section_principal.appendChild(div_total);

let p5 = document.createElement('p');
    p5.setAttribute('class', 'parag_item');
    p5.innerText = 'Total';

    div_total.appendChild(p5);

let p6 = document.createElement('p');
    p6.setAttribute('class', 'parag_valor');
    p6.innerHTML = `R$ ${soma.toFixed(2)}`;

    div_total.appendChild(p6);

let div_btn = document.createElement('div');
    div_btn.setAttribute('class', 'div_btn');
    
    section_principal.appendChild(div_btn);

let btn_finalizar = document.createElement('button');
    btn_finalizar.setAttribute('class', 'btn_finalizar');
    btn_finalizar.innerText = 'Finalizar compra';

    div_btn.appendChild(btn_finalizar);

let body = document.querySelector('body');

    body.appendChild(main);

    