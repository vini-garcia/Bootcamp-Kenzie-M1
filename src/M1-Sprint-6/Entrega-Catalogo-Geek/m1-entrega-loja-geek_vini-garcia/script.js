function criarCards (){
    for (let i = 0; i<listPainting.length; i++){
        let lista = listPainting[i];
      

        let div7 = document.createElement('ul');
        div7.setAttribute('class', 'div7');

            let div8 = document.createElement('li');
            div8.setAttribute('class', 'div8');

            div7.appendChild(div8);
            
                let img2 = document.createElement('img');
                img2.setAttribute('class', 'img2')
                img2.src = lista.image;
                img2.alt = lista.name;

                div8.append(img2);
            
            let div9 = document.createElement('li');
            div9.setAttribute('class', 'div9');

            div7.appendChild(div9);
            
                let h1 = document.createElement('h1');
                h1.setAttribute('class', 'h1');
                h1.innerHTML = lista.name;

                div9.appendChild(h1);

            let div10 = document.createElement('li');
            div10.setAttribute('class', 'div10');

            div7.appendChild(div10);

                let small = document.createElement('small');
                small.setAttribute('class', 'small');
                small.innerHTML = lista.price;

                div10.appendChild(small);     
                
                let section1 = document.querySelector('.section1');
                section1.appendChild(div7);
    }

    for (let i = 0; i<listActionFigures.length; i++){
        let lista = listActionFigures[i];

            let div13 = document.createElement('ul');
            div13.setAttribute('class', 'div13');

                let div14 = document.createElement('li');
                div14.setAttribute('class', 'div14');

                div13.appendChild(div14);
                
                    let img2 = document.createElement('img');
                    img2.setAttribute('class', 'img2')
                    img2.src = lista.image;
                    img2.alt = lista.name;

                    div14.append(img2);
                
                let div15 = document.createElement('li');
                div15.setAttribute('class', 'div15');

                div13.appendChild(div15);
                
                    let h1 = document.createElement('h1');
                    h1.setAttribute('class', 'h1');
                    h1.innerHTML = lista.name;

                    div15.appendChild(h1);

                let div16 = document.createElement('li');
                div16.setAttribute('class', 'div16');

                div13.appendChild(div16);

                    let small = document.createElement('small');
                    small.setAttribute('class', 'small');
                    small.innerHTML = lista.price;

                    div16.appendChild(small);     
                    
                    let section2 = document.querySelector('.section2');
                    section2.appendChild(div13);
    }
}
criarCards()
