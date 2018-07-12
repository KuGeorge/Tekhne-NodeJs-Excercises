let palindromo = function (cadena){
    let reverse = cadena.split('').reverse().join('').toString();
    
    if(reverse === cadena){
      return true;
    }
    return false;
    
  }

const conif = require('node-console-input');
 
let word = conif.getConsoleInput("Enter a word: ", false);
console.log("Is the word palindromo? : " + palindromo(word));