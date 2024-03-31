const prompt = require('prompt-sync')();
const customModule = require('../module.js')

let request;

do {

    const novoCadastro = customModule.inserirCadastro();

    customModule.exibirCadastro(novoCadastro);

    customModule.addCadastro(novoCadastro);
    
    console.log(customModule.cadastros[0]);
    
} while (request !== 'sim');