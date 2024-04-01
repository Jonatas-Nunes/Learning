const prompt = require('prompt-sync')();
const verificaIdade = require('./verificaIdade');

while (true) {
    var nome = prompt('Nome completo: ');
    var rg = prompt('RG: ');
    var cpf = prompt('CPF: ');
    var nascimento = prompt('Nascimento (DD/MM/AAAA): ');

    if (verificaIdade.eMaior(nascimento)) {
        var eleitor = prompt('Título de eleitor: ');
    } else {
        var eleitor = undefined;
    }

    console.log('Nome:', nome);
    console.log('RG:', rg);
    console.log('CPF:', cpf);
    console.log('Data de Nascimento:', nascimento);
    eleitor !== undefined ? console.log('Título de Eleitor: ', eleitor) : console.log();

    var confirm = prompt('Confirma (S/N)? ');

    if (confirm.toUpperCase() === 'S') {
        console.log('Cadastro concluído.');
        break;
    } else {
        console.clear();
    }
}