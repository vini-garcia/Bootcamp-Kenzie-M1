const user = {
    name: "Jhon Doyle Fox",
    savingsBalance: 500,
    cardsInformation: [
        {
          number: "5160 4196 4843 3388",
          creditBalance: 1000,
          ensign: "American Express",
        },
      ],
    };
    
    let responseWithDraw = 0;
    let withdrawalAmount = 0;

    function makeWithDrawal (user){
        responseWithDraw = parseInt(prompt('Digite 1 para poupança ou 2 para crédito.'));
        withdrawalAmount = parseInt(prompt('Digite o valor que deseja sacar.'));
        operacao = responseWithDraw
        if(typeof(withdrawalAmount) != 'number' || withdrawalAmount < 5 || withdrawalAmount > 500 || withdrawalAmount == parseFloat()){
            alert('This value is not allowed');
        }
        else if(operacao == 1){
            if(withdrawalAmount <= user.savingsBalance){
                user.savingsBalance -= withdrawalAmount;
                alert('Withdrawal carried out');
            }else if(withdrawalAmount > user.savingsBalance){
                alert('Balance unavailable');
            }

        }
        else if(operacao == 2){
            if(withdrawalAmount <= user.cardsInformation[0].creditBalance){
                user.cardsInformation[0].creditBalance -= withdrawalAmount;
                alert('Withdrawal carried out');
            }else if(withdrawalAmount > user.cardsInformation[0].creditBalance){
                alert('Balance unavailable');
            }
        }
        else if(operacao != 1 || operacao != 2){
            alert('Tipo de conta inválido.');
        }
    }
    //makeWithDrawal(user);


    let responseBalance = 0;
    function getBalance (user){
        let balance = 0;
        responseBalance = parseInt(prompt('Digite 1 para poupança ou 2 para crédito.'));
        tipoDeConta = responseBalance
        if(tipoDeConta == 1){
            balance = user.savingsBalance;
            alert(balance);
        }
        else if(tipoDeConta == 2){
            balance = user.cardsInformation[0].creditBalance;
            alert(balance);
        }
    }
    //getBalance(user);

    let valueForDeposit = 0;
    function makeDeposit (user){
        valueForDeposit = parseInt(prompt('Digite o valor que deseja depositar.'));
        if(typeof(valueForDeposit) != 'number' || valueForDeposit < 5 || valueForDeposit > 500 || valueForDeposit == parseFloat()){
            alert('Valor inválido');
        }
        else{
            user.savingsBalance += valueForDeposit;
            alert('Deposit made successfully');
        }
    }
    //makeDeposit(user);