function interseccion(a,b){
    return [...a].filter(x => b.includes(x));
  }
  
    const conif = require('node-console-input'); 
    let array1 = conif.getConsoleInput("Enter a array: ", false);
    const conif2 = require('node-console-input'); 
    let array2 = conif2.getConsoleInput("Enter other array: ", false);
    console.log("La interseccion es : " + interseccion(array1,array2));