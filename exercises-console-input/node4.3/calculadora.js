"use strict";

var calculadora = function calculadora(expresion) {
  return eval(expresion);
};

var conif = require('node-console-input');

var expresion = conif.getConsoleInput("Enter an expression: ", false);
console.log("The value of this expression is : " + calculadora(expresion));