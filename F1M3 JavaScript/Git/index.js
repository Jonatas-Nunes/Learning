const prompt =  require('prompt-sync')();

var nome = prompt("Digite seu nome: ");
var salario_bruto = parseFloat(prompt("Digite seu salário bruto: "));
var sigson = 0;

if (salario_bruto > 0 && salario_bruto <= 1903.86) { 
    sigson = salario_bruto * 0.05
    console.log("O seu imposto de renda é: ", sigson)
} else if (salario_bruto <= 2826.65){ 
    sigson = salario_bruto * 0.075
    console.log("O seu imposto de renda é: ", sigson)
} else {
    sigson = salario_bruto * 0.15
    console.log("O seu imposto de rendas é: ", sigson)
}

var salario_liquido = salario_bruto - sigson;
console.log ("Salário Líquido: R$ ", salario_liquido)