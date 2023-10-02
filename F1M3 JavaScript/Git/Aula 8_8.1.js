const prompt = require('prompt-sync')();

var x = parseFloat(prompt("Lado 1 do Triângulo: "))
var y = parseFloat(prompt("Lado 2 do Triângulo: "))
var z = parseFloat(prompt("Lado 3 do Triângulo: "))

// Testa a propriedade para verificar se é um Triângulo
if ((x + y > z) && (x + z > y) &&(y + z > x)) {
    if((x == y ) && (y == z)) {
        console.log("O Trinângulo é equilátero")
    }else if ((x == y) || (x == z) || (y == z)) {
        console.log("O Triângulo é isosceles")
    }else {
        console.log("O Triângulo é escaleno")
    }
    // Caso não seja um triângulo
} else {
    console.log("Os lados não formam um triângulo!")
}