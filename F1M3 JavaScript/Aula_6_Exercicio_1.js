const prompt = require('prompt-sync')();

var salario_bruto = parseFloat(prompt("Digite seu salário: "));
var ir = parseFloat(prompt("Digite seu imposto de renda: "));

var salario_liquido = salario_bruto - ir;

console.log("O valor do salário liquido é: ", salario_liquido);