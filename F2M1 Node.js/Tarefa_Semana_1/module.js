const prompt = require('prompt-sync')();

const cadastros = [];

function inserirCadastro() {

    var nome = prompt('[Nome completo: ');
    var rg = prompt('[RG: ');
    var cpf = prompt('[CPF: ');
    var nascimento = prompt('[Data de Nascimento: ');

    return {nome, rg, cpf, nascimento};
}

function addCadastro(cadastro) {

    let request = prompt('Os dados informados estão corretos? (Sim/Não)').trim().toLowerCase();

    if (request == 'sim') {

        cadastros.push(cadastro);

    } else {
        console.log('Insirá um novo cadastro.')
        const novoCadastro = inserirCadastro();
        addCadastro(novoCadastro);
    }

}

function exibirCadastro(cadastro) {
    
    console.log('='.repeat(10));
    console.log('Nome: ' + cadastro.nome);
    console.log('RG: ' + cadastro.rg);
    console.log('CPF: ' + cadastro.cpf);
    console.log('Nascimento: ' + cadastro.nascimento);

}

module.exports = {
    inserirCadastro,
    addCadastro,
    exibirCadastro,
    cadastros
}