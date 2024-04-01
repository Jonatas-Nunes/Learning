const fs = require('fs');

fs.readFile('./Aula_10.1.json', 'utf-8',  (erro, dados) => {

    var lista = JSON.parse(dados);
    console.log(lista.filmes[0].titulo);
});