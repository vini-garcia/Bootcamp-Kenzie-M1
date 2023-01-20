const carros = [
    {
    modelo: "Ka",
    marca: "Ford",
    ano: "2000",
    cor: "Branco",
    completo: false,
    acessorios: ['Vidro Elétrico'],
    preco: 6799.33
    },
    {
    modelo: "Gol",
    marca: "VW",
    ano: "1996",
    cor: "Preto",
    completo: false,
    acessorios: ['Trava'],
    preco: 12199.13
    },
    {
    modelo: "Palio",
    marca: "Fiat",
    ano: "1995",
    cor: "Verde",
    completo: false,
    acessorios: [],
    preco: 11099.1
    },
    {
    modelo: "Monza",
    marca: "Chevrolet",
    ano: "1993",
    cor: "Vinho",
    completo: false,
    acessorios: [],
    preco: 14578.25
    },
    {
    modelo: "Saveiro",
    marca: "VW",
    ano: "2013",
    cor: "Prata",
    completo: false,
    acessorios: [],
    preco: 28399.13
    },
    {
    modelo: "Gol",
    marca: "VW",
    ano: "1996",
    cor: "Preto",
    completo: true,
    acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
    preco: 14350.45
    },
    {
    modelo: "Gol",
    marca: "VW",
    ano: "2013",
    cor: "Preto",
    completo: true,
    acessorios: ['Alarme', 'Trava', 'Ar', 'Vidro Elétrico'],
    preco: 22109.21
    },
    {
    modelo: "Montana",
    marca: "Chevrolet",
    ano: "2011",
    cor: "Azul",
    completo: false,
    acessorios: [],
    preco: 15999.13
    },
    {
    modelo: "Stilo",
    marca: "Fiat",
    ano: "2000",
    cor: "Preto",
    completo: false,
    acessorios: [],
    preco: 17251.36
    }
  ]
  
  function contaTotal(lista){
    
    let ncarros = 0;
    for (i = 0; i <= lista.length-1; i++){
        ncarros ++
    } console.log(`${ncarros}`);
    
    // OU console.log(`O números de carro é ${lista.length}`)    
    
    }
    // contaTotal(carros)


    function precoTotal(lista){
        let valorTotal = 0;
        for (let i = 0; i < lista.length; i++){
            valorTotal += lista[i].preco;
        }
        return `A soma do preço de todos os veículos é R$${valorTotal.toFixed(2)}`
    }

//        console.log(precoTotal(carros))

    let marcaDesejada = '';
    let arr = [];
    function filtraPorMarca(lista, marcaCarro){
        marcaDesejada = prompt('Digite a marca do veículo desejado');
        for (i = 0; i <= lista.length-1; i++){
            if ( marcaDesejada == lista[i].marca){
                arr.push(lista[i]);
            }
        }return arr;
        }
    //    console.log(filtraPorMarca(carros, marcaDesejada))


    let acessorio = '';
    let arr4 = [];
    function filtraPorAcessorio(lista, acessorio){
        acessorio = prompt('Digite o acessório desejado')
        for (i = 0; i <= lista.length-1; i++)
        for (j = 0; j <= lista[i].acessorios.length; j++){
            if (acessorio == lista[i].acessorios[j])[
                arr4.push(lista[i])
            ]
        }return arr4;
        }
    //    console.log(filtraPorAcessorio(carros, acessorio))

        let arr5 = [];
        function eCarroCompleto(lista){
        for (i = 0; i <= lista.length-1; i++){
            if (lista[i].completo == true){
                arr5.push(lista[i])
            }
        }return arr5;
    }
    //   console.log(eCarroCompleto(carros))


    let obj6 = 
    {
    modelo: "T-Cross",
    marca: "VW",
    ano: "2023",
    cor: "Branco",
    completo: true,
    acessorios: ['Teto Solar'],
    preco: 159000.99
    }
    function adicionaCarro(lista, carroAdicionado){
        lista.push(carroAdicionado);
        return carros    
    }
    // console.log(adicionaCarro(carros,obj6))

    function removeCarro(lista, posicao){
        carros.splice(posicao -1, 1);
        return carros
        }
    //    console.log(removeCarro(carros,10))

    let numero8 = 0;
    function contaCarrosNovos(lista){
        for (i = 0; i <= lista.length-1; i++){
            if (2022 - parseInt(lista[i].ano) < 10){
                numero8++
            }
        } return numero8;
        }
    //    console.log(contaCarrosNovos(carros))

        let pessoa = {
            nome: '',
            telefone: ''
        }
    for (i = 0; i <= carros.length-1; i++){
        carros[i].dono = pessoa;
    }
    function contaCarrosNovos(lista, posicao, NovoDono){
        
       lista[posicao].dono = NovoDono
         return carros
    }
    // console.log(contaCarrosNovos(carros,8,{nome: 'Vinicius Garcia', telefone: '044 99999999'}))

