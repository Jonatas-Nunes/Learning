const prompt =  require('prompt-sync')();

var salarios = [];
var soma = 0;
var media = 0;
var qtd_menores = 0;

for (i = 1; i <= 5; i++) {
    console.log("Pessoa ", i);
    var nome =  prompt("Digite seu nome: ");
    var salario_bruto = parseFloat(prompt("Digite seu salário bruto: "));
    var dependentes = parseInt(prompt("Digite o número de dependentes: "));

    for (var j = 1; j <= dependentes; j++); {
        var ganho = parseFloat(prompt("Digite seu ganho mensal: "));
        salario_bruto += ganho;
    }
    
    var renda_per_capta =  salario_bruto / (dependentes + 1);
    var ir = calcular_ir(salario_bruto, renda_per_capta)
    var salario_liquido = salario_bruto - ir;
    console.log("Salário Líquido: R$ ", salario_liquido);
    salarios.push(salario_liquido);
    soma += salario_liquido;
}

media = soma / 5;
qtd_menores = calcular_qtd_menores(salarios, media)
console.log("A média dos salários líquidos é: ", media);
console.log("A quantidade de pessoas com salário líquido menor que a média é: ", qtd_menores);

function calcular_ir (salario_bruto, renda_per_capta) {
    if (renda_per_capta >= 500) {

        if (salario_bruto > 0 && salario_bruto <= 1903.86) {
            var ir = salario_bruto * 0.05;
        } else if (salario_bruto <= 2826.65) {
            var ir = salario_bruto * 0.075;
        } else {
            var ir = salario_bruto * 0.15;
        }
    } else {
        var ir = 0;
    }
    return ir;
}

 function calcular_qtd_menores (salarios, media) {
    for (var i = 0; i <= 4; i++) {
        if (salarios[i] < media) {
            qtd_menores++;
        }
    }
     return qtd_menores;
 }