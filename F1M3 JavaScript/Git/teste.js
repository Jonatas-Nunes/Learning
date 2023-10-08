const prompt = require('prompt-sync')();

for (i = 1; i <= 5; i++) {

    var nome = prompt("Digite seu nome: ");
    var salario_bruto = parseFloat(prompt("Digite seu salário bruto: "));
    var dependentes = parseInt(prompt("Digite o número de dependentes: "));

    var renda_per_capta = salario_bruto / (dependentes + 1);


if (renda_per_capta >= 500) {

    if (salario_bruto > 0 && salario_bruto <= 1903.86) {
        var ir = salario_bruto * 0.05;
    } else if (salario_bruto <= 2826.65) {
        var ir = salario_bruto * 0.075;
    } else {
        var ir = salario_bruto * 0.15;
    }
}

else {
    var ir = 0
}
var salario_liquido = salario_bruto - ir;
console.log("Salário Líquido: R$ ", salario_liquido)
}