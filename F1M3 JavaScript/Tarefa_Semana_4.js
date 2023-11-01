const prompt = require('prompt-sync')();
var altura = [];
var altura_array_aux = [];
var cont = 0;

for (i = 0; i <= 9; i++) {
    altura.push(parseFloat(prompt("Digite a altura: ")));
    altura_array_aux.push(altura[i]);
    altura_array_aux.sort();
}

for (i = 0; i <= 9; i++) {
    cont = 0;
    for (let j = 0; j <= 9; j++) {
        if (altura[i] > altura_array_aux[j]) {
            cont++;
        }
    }
    console.log("O aluno ", i, ": maior que ", (cont), "aluno(s)")
}
console.log(altura);