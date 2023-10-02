const prompt =  require('prompt-sync')();

var nome = prompt("Digite seu nome: ");
var salario_bruto =  parseFloat(prompt("Digite seu salário Bruto"));
var dependentes = parseInt(prompt("Digite o número de dependentes: "));

var renda_percapta =  salario_bruto /  dependentes;

if (renda_percapta >= 500){
    if (salario_bruto > 0 && salario_bruto <= 1903.98) {
        var ir =  salario_bruto * 0.05;
        console.log("O seu imposto de renda é: ", ir)
    } else if (salario_bruto <= 2826.65) {
        var ir = salario_bruto * 0.075;
        console.log("O seu imposto de renda é: ", ir)
    } else {
        var ir = salario_bruto * 0.15;
        console.log("O seu imposto de renda é: ", ir)
    }
} else {
    var ir = 0;
}


var salario_liquido = salario_bruto - ir;
console.log("Sal'ario l'iquido: R$ ", salario_liquido);