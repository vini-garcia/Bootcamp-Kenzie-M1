let str = '';
let str2 = '';
let str3 = '';

function snapCrackle (maxValue){
    for (let i = 1; i <= maxValue; i++){
        if (i % 2 == 1 && i % 5 == 0){
            str = 'SnapCrackle';
            str2 = str2 + `${str}` + `, `; 
    }   
        else if (i % 5 == 0){
            str = 'Crackle';
            str2 = str2 + `${str}` + `, `;
            
    }   
        else if (i % 2 == 1){
            str = 'Snap';
            str2 = str2 + `${str}` + `, `;
    }   
        else {
            str = i;
            str2 = str2 + `${str}` + `, `;
    }
        
} 

    for (let i = 0; i < str2.length; i++){
        if (i < str2.length-2){
            str3 = str3 + str2[i] 
        }
    }
  return str3;

}
console.log(snapCrackle(15));