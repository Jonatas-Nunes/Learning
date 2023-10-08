const prompt = require('prompt-sync')();

do {
    var cont = 0;
    var n = parseInt(prompt("Digite um número inteiro positivo: "));
    console.log("Os números primos que exitem entre 1 e", n, " são: ");

    for (let i = 1; i < n - 1; i++) {
        cont = 0
        for (let j = 1; j <= i; j++) {
            if (i % j == 0) {
                cont++
            }
        }
        if (cont == 2) {
            console.log(i)
        }
    }
} while (n >= 0);