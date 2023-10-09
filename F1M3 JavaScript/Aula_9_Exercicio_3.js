const prompt = require('prompt-sync')();
var cont = "s";
var soma = 0;

while (cont == "s" || cont == "S") {

    var n = parseInt(prompt("Digite: "));
    var cont = prompt("Deseja continuar (s/n)? ");
    soma += n;

} 

console.log("Soma: ", soma);