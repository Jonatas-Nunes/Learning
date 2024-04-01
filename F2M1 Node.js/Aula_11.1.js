const fs = require('fs');

fs.writeFile('./arquivoTexto', 'Este é o arquivo é um arquivo escrito programáticamente no Node.js', (erro) => {

    if (erro) {
        console.log(erro.message);
        return;
    }

    console.log('Arquivo escito com sucesso');
});

fs.readFile('./arquivoTexto', 'utf-8', (erro, dados) => {

    if (erro) {
        console.log(erro.message);
        return;
    }

    console.log(dados);
});