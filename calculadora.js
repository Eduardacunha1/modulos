var mensagem= require("./modulos/mensagem")
var somar = require("./modulos/somar");
var media = require("./modulos/media");
var dividir = require("./modulos/dividir");
var multiplicar = require("./modulos/multiplicar");

var nome = "eduarda";
var mensagem2 = "seja bem vinda":

console.log(mensagem(nome,mensagem2));
console.log("A soma de X e Y é: "+somar(20,80));
console.log("A media de X e Y é: "+media(120, 20));
console.log("a divisão de X e Y é: "+dividir(80,20));
console.log("multiplicação de X e Y é: "+multiplicar(20,5));
