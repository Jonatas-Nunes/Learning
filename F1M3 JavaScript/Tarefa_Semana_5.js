const prompt = require('prompt-sync')();

var nome = 0;
var modelo = 0;
var ano = 0;
var captacao = 0;
var index_guitar = 0;

var guitarra_array = [];
var modelo_array = [];
var ano_array = [];
var captacao_array = [];

Sistema();

while (escolha != 0) {

    var escolha = parseInt(prompt("Digite sua opção: "));

    if (escolha == 1) {
        inserir_guitarra(nome, modelo, ano, captacao);
        Sistema();
    } else if (escolha == 2) {
        excluir_guitarra(index_guitar);
        listar_guitarra
        Sistema();
    } else if (escolha == 3) {
        for (index_guitar = 0; index_guitar < guitarra_array.length; index_guitar++) {
            listar_guitarra(index_guitar)
        }
        Sistema();
    } else if (escolha == 0) {
        console.log("Obrigado!")
    } else {
        Sistema();
        escolha = parseInt(prompt("Digite sua opção: "));
    }
}

function inserir_guitarra(nome, modelo, ano, captacao) {
    nome = prompt("Insira o nome da Guitarra: ");
    guitarra_array.push(nome);
    modelo = prompt("Insira o modelo da Guitarra: ");
    modelo_array.push(modelo);
    ano = prompt("Insira o ano de fabricação da Guitarra: ");
    ano_array.push(ano);
    captacao = prompt("Insira o tipo de captação da Guitarra: ");
    captacao_array.push(captacao);
}

function excluir_guitarra(index_guitar) {
    index_guitar = parseInt(prompt("Informe o código de qual guitarra você deseja excluir: "));
    guitarra_array.splice(index_guitar, index_guitar);
    modelo_array.splice(index_guitar, index_guitar);
    ano_array.splice(index_guitar, index_guitar);
    captacao_array.splice(index_guitar, index_guitar);
    for (index_guitar = 0; index_guitar < guitarra_array.length; index_guitar++) {
        listar_guitarra(index_guitar)
    }
    index_guitar = 0;
}

function listar_guitarra(index_guitar) {
    console.log("CÓDIGO DA GUITARRA nº ", index_guitar);
    console.log("Modelo da Guitarra: ", modelo_array[index_guitar]);
    console.log("Ano de fabricação: ", ano_array[index_guitar]);
    console.log("Captação: ", captacao_array[index_guitar]);
    console.log("----------------------------------------------")
}

function Sistema () {
    console.log("Sistema de Cadastro de Guitarras");
    console.log("1 - Inserir Guitarra");
    console.log("2 - Excluir Guitarra");
    console.log("3 - Listar Guitarras");
    console.log("0 - Sair");
}