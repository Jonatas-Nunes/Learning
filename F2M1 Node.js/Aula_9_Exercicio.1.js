const prompt = require('prompt-sync')();

try {
    const idade = parseInt(prompt('Digite sua idade: '));

    if (isNaN(idade)) {
        throw new Error('Por favor, insira uma idade válida (número inteiro).');
    }

    if (!Number.isInteger(idade)) {
        throw new Error('Por favor, insira uma idade válida (número inteiro).');
    }

    if (idade >= 18) {
        console.log('Você é maior de idade.');
    } else {
        console.log('Você é menor de idade.');
    }
    
} catch (error) {
    console.log(`Ocorreu um erro: ${error.message}`);
}
