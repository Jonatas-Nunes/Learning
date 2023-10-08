const prompt = require('prompt-sync')();

do {
    n = parseInt(prompt("Digite um número inteiro positivo: "));
    console.log("Os números que exitem entre 1 e", n, " são: ");
    for ( i = 1; i < n; i++ ) {
        console.log(i)
    }
} while (n >= 0);