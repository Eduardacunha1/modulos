var mensagen = require("./modulos/mensagem")
var nome = "eduarda";
var somar = require("./modulos/somar");
var media = require("./modulos/media");
var dividir = require("./modulos/dividir");
var multiplicar = require("./modulos/multiplicar");

console.log(mensagen(nome));
console.log("A soma de X e Y é: "+somar(20,80));
console.log("A media de X e Y é: "+media(20,120));
console.log("a divisão de X e Y é: "+dividir(80,20));
console.log("multiplicação de X e Y é: "+multiplicar(20,5));
