const prompt = require('prompt-sync')();

var nome = prompt("Informe seu nome: ");
var valor = parseFloat(prompt("Informe o valor da compra: "));
var desconto = 0;

if (valor < 1000) {
    var desconto = valor * 0.05;
    var valor = valor - desconto;
    console.log("O seu deconto foi de ", desconto, "e o valor passou a ser ", valor);
} else if (valor > 1000 && valor <= 5000) {
    var desconto = valor * 0.1;
    var valor = valor - desconto;
    console.log("O seu desconto foi de ", desconto, "e o valor passou a ser ", valor);
} else {
    var desconto = valor * 0.15;
    var valor = valor - desconto;
    console.log("O seu desconto foi de ", desconto, "e o valor passou a ser", valor);
}