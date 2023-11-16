const prompt = require('prompt-sync')();

var valor_imc = 0;
var cod_situacao = 0;

function calcular_imc (peso, altura) {
    imc = peso / altura**2;
    return imc;
}

function vericar_situacao (imc) {
    if (imc < 18.5) {
        console.log("Você está abaixo do peso ideal!");
    } else if (18.5 <= imc && imc < 25) {
        console.log("Parabéns! Você está em seu peso normal!");
    } else if (25 <= imc && imc < 30) {
        console.log("Você está acima do seu peso! (Sobrepeso)");
    } else {
        console.log("Obesidade!")
    }
}

for (i=1; i <= 5; i++) {
    var nome = prompt("Entre com o seu nome: ");
    var peso = parseFloat(prompt("Entre com o seu peso (Kg): "));
    var altura = parseFloat(prompt("Entre com a sua altura (Metros): "));
    valor_imc = calcular_imc(peso, altura);
    console.log("Seu IMC é: ", valor_imc, ".");
    vericar_situacao(imc);
}