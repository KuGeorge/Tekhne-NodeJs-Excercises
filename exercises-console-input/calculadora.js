let calculadora = function(expresion){
    return eval(expresion);
}


const conif = require('node-console-input');
 
let expresion = conif.getConsoleInput("Enter an expression: ", false);
console.log("The value of this expression is : " + calculadora(expresion));