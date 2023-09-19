function criarCards(itens) {
  for (let i = 0; i < itens.length; i++) {
    let item = itens[i];

    let ul_section = document.querySelector(".ul_section");

    let li_section = document.createElement("li");
    li_section.setAttribute("class", "li_section");

    ul_section.appendChild(li_section);

    let a_li_1 = document.createElement("a");
    a_li_1.setAttribute("class", "a_li_section");

    li_section.appendChild(a_li_1);

    let img_li = document.createElement("img");
    img_li.setAttribute("class", "img_li_section");
    img_li.src = item.img;
    img_li.alt = item.nameItem;

    a_li_1.appendChild(img_li);

    let p_li_1 = document.createElement("p");
    p_li_1.setAttribute("class", "p_li_section_tipo");
    p_li_1.innerHTML = item.tag;

    li_section.appendChild(p_li_1);

    let a_li_2 = document.createElement("a");
    a_li_2.setAttribute("class", "a_li_section");

    li_section.appendChild(a_li_2);

    let h3_section = document.createElement("h3");
    h3_section.setAttribute("class", "h3_li_section");
    h3_section.innerHTML = item.nameItem;

    a_li_2.appendChild(h3_section);

    let p_li_2 = document.createElement("p");
    p_li_2.setAttribute("class", "p_li_section_desc");
    p_li_2.innerHTML = item.description;

    li_section.appendChild(p_li_2);

    let p_li_3 = document.createElement("p");
    p_li_3.setAttribute("class", "p_li_section");
    p_li_3.innerHTML = `R$ ${item.value.toFixed(2)}`;

    li_section.appendChild(p_li_3);

    let btn_li_section = document.createElement("button");
    btn_li_section.setAttribute("class", "btn_li_section");
    btn_li_section.setAttribute("id", `item_${item.id}`);
    btn_li_section.innerText = "Adicionar ao carrinho";

    li_section.appendChild(btn_li_section);
  }
}
criarCards(data);

let count = 0;
let valorTotal = 0;

function funcaoPrincipal() {

  let botoes = document.querySelectorAll(".btn_li_section");

  for (let i = 0; i < botoes.length; i++) {
    let botao = botoes[i];

    botao.addEventListener("click", function (event) {
      let idItem = event.target.id;
      let id = parseInt(idItem.substring(5));

      let item = procuraItem(id);

      let cardCarrinho = criarCardsCarrinhos(item);

      let ul_aside = document.querySelector(".ul_aside");
      ul_aside.appendChild(cardCarrinho);

      count++;
      document.querySelector(".p_quant_aside_count").innerHTML = count;

      valorTotal += item.value;
      document.querySelector(".p_total_aside_valor").innerHTML = `R$ ${valorTotal.toFixed(2)}`;

      let remover = document.querySelector(".car_vazio");
      if (count > 0) {
        remover.setAttribute("id", "car_vazio_id");
      }
    })
  }

  function procuraItem(id) {
    for (let i = 0; i < data.length; i++) {
      let item = data[i];
      if (id == item.id) {
        return item;
      }
    }
    return "Item não encontrado";
  }

  function criarCardsCarrinhos(item) {
    let li_aside = document.createElement("li");
    li_aside.setAttribute("class", "li_aside");
    li_aside.setAttribute("id", `car_${item.id}`);

    let img_li_aside = document.createElement("img");
    img_li_aside.setAttribute("class", "img_li_aside");
    img_li_aside.src = item.img;
    img_li_aside.alt = item.nameItem;

    li_aside.appendChild(img_li_aside);

    let div_prod_aside = document.createElement("div");
    div_prod_aside.setAttribute("class", "div_prod_aside");

    li_aside.appendChild(div_prod_aside);

    let h4_prod_aside = document.createElement("h4");
    h4_prod_aside.setAttribute("class", "h4_prod_aside");
    h4_prod_aside.innerHTML = item.nameItem;

    div_prod_aside.appendChild(h4_prod_aside);

    let p_prod_aside = document.createElement("p");
    p_prod_aside.setAttribute("class", "p_prod_aside");
    p_prod_aside.innerHTML = `R$ ${item.value.toFixed(2)}`;

    div_prod_aside.appendChild(p_prod_aside);

    let btn_prod_aside = document.createElement("button");
    btn_prod_aside.setAttribute("class", "btn_prod_aside");
    btn_prod_aside.setAttribute("id", `bar_${item.id}`);
    btn_prod_aside.innerText = "Remover produto";

    div_prod_aside.appendChild(btn_prod_aside);

    let li_aside_id = `car_${item.id}`;

    btn_prod_aside.addEventListener("click", function (event) {
      let li = document.querySelector(`#car_${item.id}`);
      li.remove();

      count--;
      document.querySelector(".p_quant_aside_count").innerHTML = count;

      valorTotal -= item.value;
      document.querySelector(".p_total_aside_valor").innerHTML = `R$ ${valorTotal.toFixed(2)}`;

      let remover = document.querySelector(".car_vazio");
      if (count < 1) {
        remover.removeAttribute("id");
      }
    });
    return li_aside;
  }
}
funcaoPrincipal();

let a_todos = document.getElementById("a_todos");
let a_acessorios = document.getElementById("a_acessorios");
let a_calcados = document.getElementById("a_calcados");
let a_camisetas = document.getElementById("a_camisetas");

a_todos.addEventListener("click", function (event) {
  let li_section = document.querySelectorAll(".li_section");
  for (let i = 0; i < li_section.length; i++) {
    li_section[i].remove();
  }
  criarCards(todos);
  event.preventDefault();
  funcaoPrincipal();
})

a_acessorios.addEventListener("click", function (event) {
  let li_section = document.querySelectorAll(".li_section");
  for (let i = 0; i < li_section.length; i++) {
    li_section[i].remove();
  }
  criarCards(acessorios);
  event.preventDefault();
  funcaoPrincipal();
})

a_calcados.addEventListener("click", function (event) {
  let li_section = document.querySelectorAll(".li_section");
  for (let i = 0; i < li_section.length; i++) {
    li_section[i].remove();
  }
  criarCards(calcados);
  event.preventDefault();
  funcaoPrincipal();
})

a_camisetas.addEventListener("click", function (event) {
  let li_section = document.querySelectorAll(".li_section");
  for (let i = 0; i < li_section.length; i++) {
    li_section[i].remove();
  }
  criarCards(camisetas);
  event.preventDefault();
  funcaoPrincipal();
})

function search_item() {
  let input = document.querySelector(".input_pesq_aside");
  input = input.value.toLowerCase();
  let resultadosPesq = [];

  for (let i = 0; i < data.length; i++) {
    let item = data[i];

    if (item.description.toLowerCase().includes(input)) {
      resultadosPesq.push(item);
      console.log(resultadosPesq);

      let li_section = document.querySelectorAll(".li_section");
      for (let i = 0; i < li_section.length; i++) {
        li_section[i].remove();
      }
      criarCards(resultadosPesq);
      funcaoPrincipal();
    }
  }
}

let tirar = document.querySelector('.btn_esvaziar');

tirar.addEventListener('click', function(event){
  let li_aside = document.querySelectorAll(".li_aside");
  for (let i = 0; i < li_aside.length; i++) {
    li_aside[i].remove();
  }
  count = 0;
  document.querySelector(".p_quant_aside_count").innerHTML = count;

  valorTotal = 0;
  document.querySelector(".p_total_aside_valor").innerHTML = `R$ ${valorTotal.toFixed(2)}`;

  let remover = document.querySelector(".car_vazio");
      if (count < 1) {
        remover.removeAttribute("id");
      }
})