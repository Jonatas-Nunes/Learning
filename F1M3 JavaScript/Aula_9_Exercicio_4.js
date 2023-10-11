const prompt = require("promp-syn")();

var maior = 0;


do {
	var n = parseInt(prompt("Digite um número: "));
	
	if (n > maior) {
		maior = n;
	}

} while (n != 0);

console.log("O maior valor foi: ", maior);