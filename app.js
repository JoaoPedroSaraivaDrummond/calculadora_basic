var calculadora = require("./calculadora");

console.log(calculadora.soma(3,8));

var temp = calculadora.multiplicacao(2,5);
var temp2 = calculadora.divisao(30,2);

console.log(calculadora.subtracao(temp, temp2));