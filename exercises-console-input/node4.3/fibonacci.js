"use strict";

function Fibonacci() {}
Fibonacci.prototype.calculate = function (n) {
  var f = void 0;
  if (n === 0) {
    f = 0;
  } else {
    if (n === 1) {
      f = 1;
    } else {
      f = this.calculate(n - 1) + this.calculate(n - 2);
    }
  }
  return f;
};
Fibonacci.prototype.showSeries = function (n) {
  for (var i = 1; i <= n; i++) {
    console.log(this.calculate(i));
  }
};
var fibo = new Fibonacci();

var conif = require('node-console-input');

var number = conif.getConsoleInput("Enter a number: ", false);
console.log("Fibonacci es: " + fibo.calculate(number));
console.log('La Serie Fibonacci es :');
fibo.showSeries(number);