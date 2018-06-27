function diferencia(a,b){
    return [[...a].filter(x => !b.includes(x)),[...b].filter(x => !a.includes(x))];
   }
   const conif = require('node-console-input'); 
   let array1 = conif.getConsoleInput("Enter a array: ", false);
   const conif2 = require('node-console-input'); 
   let array2 = conif2.getConsoleInput("Enter other array: ", false);
   console.log("La diferencia es es : " + diferencia(array1,array2));