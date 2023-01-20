let count = 1;
function enigma (codigo){
    if (codigo.length <= 250){
        for (let i = 0; i < codigo.length-1; i++){
            if(codigo[i] == codigo[i].toUpperCase() || codigo[i].toLowerCase() == codigo[i].toUpperCase()){
                count++;                
            }
        }return count;
    } return 'Tamanho de código inválido';
}

console.log(enigma('sss.aasd.sss'))
