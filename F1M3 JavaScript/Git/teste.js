const prompt = require('prompt-sync')();

var nome = prompt("Digite seu nome: ");
var salario_bruto = parseFloat(prompt("Digite seu salário bruto: "));
var dependentes = parseInt(prompt("Digite a quantidade de dependentes: "));
var renda_familiar = 0

if (dependentes > 0) {
    for (var dep = 1; dep <= dependentes; dep++) {
        var nome = prompt("Digite o nome do dependente: ");
        var ganho_mensal = prompt("Digite o ganho mensal do seu dependente: ");
        var renda_familiar = salario_bruto + ganho_mensal;
    }
    renda_familiar /= dependentes;
    if (renda_familiar >= 500) {
        if (salario_bruto <= 1903.98) {
            var salario_liquido = salario_bruto * 0.95;
            console.log("Seu salário líquido é: R$ ", salario_liquido);
            console.log("O desconto aplicado foi de: R$ ", salario_bruto * 0.05);
        } else if (salario_bruto > 1903.98 && salario_bruto <= 2826.65) {
            var salario_liquido = salario_bruto * 0.925;
            console.log("Seu salário líquido é: R$ ", salario_liquido);
            console.log("O desconto aplicado foi de: R$ ", salario_bruto * 0.075)
        } else {
            var salario_liquido = salario_bruto * 0.85;
            console.log("Seu salário líquido é: R$ ", salario_liquido);
            console.log("O seu desconto aplicado foi de:  R$ ", salario_bruto * 0.15)
        }
    } else {
        console.log("Você está inseto de imposto de renda.");
    }
} else if (dependentes == 0) {

    if (salario_bruto <= 1903.98) {
        var salario_liquido = salario_bruto * 0.95;
        console.log("Seu salário líquido é: R$ ", salario_liquido);
        console.log("O desconto aplicado foi de: R$ ", salario_bruto * 0.05);
    } else if (salario_bruto > 1903.98 && salario_bruto <= 2826.65) {
        var salario_liquido = salario_bruto * 0.925;
        console.log("Seu salário líquido é: R$ ", salario_liquido);
        console.log("O desconto aplicado foi de: R$ ", salario_bruto * 0.075)
    } else {
        var salario_liquido = salario_bruto * 0.85;
        console.log("Seu salário líquido é: R$ ", salario_liquido);
        console.log("O seu desconto aplicado foi de:  R$ ", salario_bruto * 0.15)
    }
}