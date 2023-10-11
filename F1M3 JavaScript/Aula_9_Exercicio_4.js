const prompt = require('prompt-sync')();
var maior = 0;

do {
    var n1 = parseInt(prompt("Digite o primeiro número"));
    if (n1 > maior) {
        maior = n1;
        console.log("O maior número é: ", maior);
    }
} while (n1 == 0);
console.log("Fim do programa.");