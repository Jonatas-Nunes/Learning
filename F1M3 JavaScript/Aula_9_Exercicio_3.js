const prompt = require('prompt-sync')();
var soma = 0;
do {
    var n = parseInt(prompt("Digite: "));
    var cont = prompt("Deseja continuar (s/n)? ");
    soma += n;

} while (cont == "s" || cont == "S");

console.log("Soma: ", soma);