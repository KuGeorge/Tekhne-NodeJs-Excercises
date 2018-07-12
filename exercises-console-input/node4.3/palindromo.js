'use strict';

var palindromo = function palindromo(cadena) {
  var reverse = cadena.split('').reverse().join('').toString();

  if (reverse === cadena) {
    return true;
  }
  return false;
};

var conif = require('node-console-input');

var word = conif.getConsoleInput("Enter a word: ", false);
console.log("Is the word palindromo? : " + palindromo(word));