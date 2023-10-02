const prompt = require('prompt-sync')();

var x = parseInt(prompt("Digite o primeiro número: "));
var y = parseInt(prompt("Digite o segundo número: "));

if (x > 0 && y > 0) {
	if ((x % 2 == 0) && (y % 2 == 0)) {
		console.log(x, "e ", y, "são pares");
	} else if ((x % 2 == 1) && (y % 2 == 1)) {
		console.log(x, "e ", y, "são impares");
	} else if ((x % 2 == 0) && (x % 2 == 1)) {
		console.log(x, "é par e ", y, "é impar");
	} else {
		console.log(x, "é impar", y, "é par")
	}
} else {
	console.log("Existe pelo menos um número 0 ou negativo!");
    if ((x < 0) && (y < 0)) {
		console.log(x, "e ", y, "são negativos");
	} else if ((x < 0) && (y == 0)) {
		console.log(x, "é negativo e", y, "é elemento neutro da multiplicação");
	} else if ((x == 0) && (y < 0)) {
	console.log(x, "é elemento neutro da multiplicação", y, "é negativo");
	}
}