const prompt = require("prompt-sync")();

// Leia os três números
var n1 = parseFloat(prompt("Digite o primeiro número: "))
var n2 = parseFloat(prompt("Digite o segundo número: "))
var n3 = parseFloat(prompt("Digite o terceiro núemro: "))
// Calcule a soma e a média

soma = n1 + n2 + n3
media = (n1 + n2 + n3)/3
// Mostre na tela o valor da soma e média

console.log("A soma é: ", soma)
console.log("A média é: ", media)