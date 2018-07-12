'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function interseccion(a, b) {
  return [].concat(_toConsumableArray(a)).filter(function (x) {
    return b.includes(x);
  });
}

var conif = require('node-console-input');
var array1 = conif.getConsoleInput("Enter a array: ", false);
var conif2 = require('node-console-input');
var array2 = conif2.getConsoleInput("Enter other array: ", false);
console.log("La interseccion es : " + interseccion(array1, array2));