// Banco de dados dos produtos

const data = [
  {
    id: 1,
    img: "./img/jaqueta.svg",
    nameItem: "Lightweight Jacket",
    description:
      "Adicione um pouco de energia ao seu guarda-roupa de inverno com esta jaqueta vibrante e resistente...",
    value: 99,
    addCart: "Adicionar ao carrinho",
    tag: ["Camisetas"],
  },
  {
    id: 2,
    img: "./img/gorro.svg",
    nameItem: "Black Hat",
    description:
      "O gorro Next.js chegou! Esta beldade bordada tem um ajuste confortável que garante que...",
    value: 110,
    addCart: "Adicionar ao carrinho",
    tag: ["Acessórios"],
  },
  {
    id: 3,
    img: "./img/mascara.svg",
    nameItem: "Mask",
    description:
      "Esta máscara facial durável é feita de duas camadas de tecido tratado e possui presilhas...",
    value: 40,
    addCart: "Adicionar ao carrinho",
    tag: ["Acessórios"],
  },
  {
    id: 4,
    img: "./img/camiseta_preta.svg",
    nameItem: "T-Shirt",
    description:
      "Esta t-shirt é imprescindível no seu guarda-roupa, combinando o caimento intemporal de...",
    value: 149,
    addCart: "Adicionar ao carrinho",
    tag: ["Camisetas"],
  },
  {
    id: 5,
    img: "./img/camiseta_branca.svg",
    nameItem: "Short-Sleeve T-Shirt",
    description:
      "Agora você encontrou a camiseta básica do seu guarda-roupa. É feito de um fio mais grosso e quente. Muito mais durável...",
    value: 199,
    addCart: "Adicionar ao carrinho",
    tag: ["Camisetas"],
  },
  {
    id: 6,
    img: "./img/moletom.svg",
    nameItem: "Champion Packable Jacket",
    description:
      "Proteja-se dos elementos com esta jaqueta embalável Champion. Esta jaqueta de poliést...",
    value: 99,
    addCart: "Adicionar ao carrinho",
    tag: ["Camisetas"],
  },
  {
    id: 7,
    img: "./img/camisa1.webp",
    nameItem: "T-Shirt",
    description:
      "Camiseta preta básica para todas as ocasiões, seja ela ir ao mercado fazer compras do almoço de domingo com a família ou...",
    value: 89,
    addCart: "Adicionar ao carrinho",
    tag: ["Camisetas"],
  },
  {
    id: 8,
    img: "./img/nike1.png",
    nameItem: "Tênis Nike Super",
    description:
      "Tênis da linha Chuck Taylor, a mais tradicional e queridinha da marca Nike. Modelo de cano baixo, todavia clássico...",
    value: 599,
    addCart: "Adicionar ao carrinho",
    tag: ["Calçados"],
  },
  {
    id: 9,
    img: "./img/nike2.png",
    nameItem: "Tênis Nike Hiper",
    description:
      "Modelo cano baixo em estilo slip on (sem cadarço) que promete muita praticidade para o seu dia a dia. Confeccionado em...",
    value: 478,
    addCart: "Adicionar ao carrinho",
    tag: ["Calçados"],
  },
  {
    id: 10,
    img: "./img/nike3.png",
    nameItem: "Tênis Nike Giga",
    description:
      "Tênis da linha Old Skool, tradicional da marca Nike em versão Plataforma. Modelo cano baixo...",
    value: 799,
    addCart: "Adicionar ao carrinho",
    tag: ["Calçados"],
  },
];

let todos = data;
let acessorios = [];
let calcados = [];
let camisetas = [];

function separarCategorias (itens){
  for(let i = 0; i < itens.length; i++){
    let item = itens[i];
    if(item.tag == 'Camisetas'){
      camisetas.push(item);
    }else if(item.tag == 'Acessórios'){
      acessorios.push(item);
    }else if(item.tag == 'Calçados'){
      calcados.push(item);
    }
  }
}
separarCategorias(data);
