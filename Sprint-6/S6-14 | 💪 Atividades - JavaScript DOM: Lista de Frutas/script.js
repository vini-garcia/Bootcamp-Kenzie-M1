let body = document.querySelector('body');
body.style.display = 'flex';
body.style.alignItems = 'center';
body.style.flexDirection = 'column'

// body.style.backgroundColor = '#F8F8F8';

let img = document.createElement('img');
img.src = './assets/img/Logo Fruit.png';
img.alt = 'Logo da empresa de hortifruti';
img.style.height = '230px';
img.style.width = '230px';

let h1 = document.createElement('h1');
h1.innerText = 'Hortifruti Melância';

let fruta_1 = document.createElement('p');
fruta_1.innerText = 'Banana';
fruta_1.style.border = 'solid';
fruta_1.style.borderRadius = '5px';
fruta_1.style.paddingRight = '110px';
fruta_1.style.paddingLeft = '110px';
fruta_1.style.paddingTop = '8px';
fruta_1.style.paddingBottom = '8px';
let div_1 = document.createElement('div');
div_1.appendChild(fruta_1);
// div_1.style.maxWidth = '100px';

let fruta_2 = document.createElement('p');
fruta_2.innerText = 'Morango';
fruta_2.style.border = 'solid';
fruta_2.style.borderRadius = '5px';
fruta_2.style.paddingRight = '110px';
fruta_2.style.paddingLeft = '110px';
fruta_2.style.paddingTop = '8px';
fruta_2.style.paddingBottom = '8px';
let div_2 = document.createElement('div');
div_2.appendChild(fruta_2);

let fruta_3 = document.createElement('p');
fruta_3.innerText = 'Goiaba';
fruta_3.style.border = 'solid';
fruta_3.style.borderRadius = '5px';
fruta_3.style.paddingRight = '110px';
fruta_3.style.paddingLeft = '110px';
fruta_3.style.paddingTop = '8px';
fruta_3.style.paddingBottom = '8px';
let div_3 = document.createElement('div');
div_3.appendChild(fruta_3);

let fruta_4 = document.createElement('p');
fruta_4.innerText = 'Pêssego';
fruta_4.style.border = 'solid';
fruta_4.style.borderRadius = '5px';
fruta_4.style.paddingRight = '110px';
fruta_4.style.paddingLeft = '110px';
fruta_4.style.paddingTop = '8px';
fruta_4.style.paddingBottom = '8px';
let div_4 = document.createElement('div');
div_4.appendChild(fruta_4);

body.appendChild(img);
body.appendChild(h1);
body.appendChild(div_1);
body.appendChild(div_2);
body.appendChild(div_3);
body.appendChild(div_4);