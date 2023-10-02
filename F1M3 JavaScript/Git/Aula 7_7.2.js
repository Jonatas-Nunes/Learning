// Positivo, negativo, zero

// Importante o módulo prompt-sync
const prompt = require ('prompt-sync')();

// Comando para entrada de dados do usário
num = parseInt(Prompt('Digite um número: '))

//Chca se num é positivo, negativo ou zero

if (num > 0){ // Checa se num é maior que 0
	// Instruções executadas se num é maior que 0
	console.log("O número: ", num, "é positivo.\n")

} else if (num < 0){ // Checa se num é menor que 0
// Instruções executadas se num é menor que 0
	console.log("O número: ", num, "é negativo. \n")
} else { // Se num não for positivo nem negativo, é 0
	//Instruções executadas se num é igual a 0
	console.log("O número: ", num, "é zero. \n")
}