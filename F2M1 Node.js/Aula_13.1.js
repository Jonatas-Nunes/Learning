const fs = require('fs');

/*fs.readFile('./Aula_10.1.json', 'utf-8',  (erro, dados) => {

    var lista = JSON.parse(dados);
    console.log(lista.filmes[0].titulo);
});*/

var estados = {
    estados: [
        {
            sigla: 'ES',
            nome: 'Espírito Santo'
        },
        {
            sigla: 'RJ',
            NOME: 'Rio de Janeiro'
        },
        {
            sigla: 'MG',
            nome: 'Minas Gerais'
        }
    ]
}

estados.estados.push({
    sigla: "SP",
    nome: "São Paulo"
});

var conteudo = JSON.stringify(estados);
fs.writeFile('./db.json', conteudo, (erro) => {
    
});