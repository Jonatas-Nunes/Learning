const prompt = require('prompt-sync')();

var n = parseInt(prompt("Digite um número inteiro: "));
var divisores = 0

for (let i = 1; i <= n - 1; i++) {
    divisores = 0;
    for (let j = 1; j <= i; j++) {

        if (i % j == 0) {
            divisores++;
        }
    }
    if (divisores == 2) {
        console.log(i);
    }
}