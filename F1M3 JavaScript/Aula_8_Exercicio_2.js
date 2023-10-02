const prompt = require('prompt-sync')();

var x = parseInt(prompt("Informe o Ângulo x: "));
var y = parseInt(prompt("Informe o Ângulo y: "));
var z = parseInt(prompt("Informe o Ângulo z: "));

if (x + y + z == 180) {
    console.log("Os ângulos informam um triângulo!");
    if ((x < 90 && y < 90 && z < 90)) {
        console.log("Os ângulos informam um triângulo acutângulo com x = ", x,"° y = ", y,"°", "e z = ", z, "°");
    } else if (x == 90 || y == 90 || z == 90) {
        console.log("Os ângulos informam um triângulo retângulo com x = ", x,"° y = ", y,"°", "e z = ", z, "°");
    } else {
        console.log("Os ângulos informam um triângulo acutângulo com x = ", x,"° y = ", y,"°", "e z = ", z, "°");
    }
} else {
    console.log("Os ângulos não formam um triângulo!")
}