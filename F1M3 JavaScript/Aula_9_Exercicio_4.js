const prompt = require('prompt-sync')();
var maior = 0;
var n1 = parseInt(prompt("Digite o primeiro número: "));
maior = n1;
console.log("O maior número por enquanto é: ", n1);

do {
    var n = parseInt(prompt("Digite um número: "));
    if (n > maior) {
        maior = n;
        console.log("O maior número é: ", maior);
    } else {
        console.log("Por enquanto o maior número continua sendo: ", maior);
    }
} while (n1 !== 0);
console.log("Fim do programa.");