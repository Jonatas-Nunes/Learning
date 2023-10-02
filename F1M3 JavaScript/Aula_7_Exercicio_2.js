const prompt = require('prompt-sync')();

var nome = prompt("Digite seu nome: ");
var nota1 = parseFloat(prompt("Primeira nota: "));
var nota2 = parseFloat(prompt("Segunda nota: "));
var nota3 = parseFloat(prompt("Terceira nota: "));
var media = (nota1 + nota2 + nota3) / 3;

if (media <= 3) {
    console.log("Você está REPROVADO! Média: ", media);
} else {
    console.log("Você foi aprovado! Media: ", media);
}