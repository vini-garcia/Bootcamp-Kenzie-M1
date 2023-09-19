let itens = [
    {
      image: './assets/img/actions/animewoman.jpg',
      name: 'Dama de Vermelho',
      price: 'R$15,00',
      type: 'action',
    },
    {
      image: './assets/img/actions/dragonballpersonagem.jpg',
      name: 'Goku Super Sayajin',
      price: 'R$57,90',
      type: 'action',
    },
    {
      image: './assets/img/actions/starwarspersonagem.jpg',
      name: 'Baby Yoda',
      price: 'R$89,99',
      type: 'action',
    },
    {
      image: './assets/img/painting/clock.jpg',
      name: 'Relógio Ben 10',
      price: 'R$250,99',
      type: 'painting',
    },
    {
      image: './assets/img/painting/gamepad.jpg',
      name: 'Gamepad',
      price: 'R$59,60',
      type: 'painting',
    },
    {
      image: './assets/img/painting/personagem.jpg',
      name: 'C-3PO Prata',
      price: 'R$999,50',
      type: 'painting',
    },
  ];
  
  let listActionFigures = [];
  let listPainting = [];
  
  function separateItens(lista) {
    for (i = 0; i < lista.length; i++) {
      if (lista[i].type == 'action') {
        listActionFigures.push(lista[i]);
      } else if (lista[i].type == 'painting') {
        listPainting.push(lista[i]);
      }
    }
  }
  separateItens(itens);