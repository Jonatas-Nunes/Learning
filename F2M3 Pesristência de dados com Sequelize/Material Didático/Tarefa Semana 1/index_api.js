const { name } = require('ejs');
const sqlite3 = require('sqlite3');

function createTable(nameTable, collum1, collum2, collum3, collum4) {
    db.run(`CREATE TABLE ${nameTable}(${collum1} int, ${collum2} varchar(60), ${collum3} varchar(40), ${collum4} varchar(60))`);
}

function insertTable(nameTable, collum1,collum2,collum3,collum4) {
    db.run(`INSERT INTO ${nameTable}(${collum1},'${collum2}','${collum3}','${collum4}')`);
}

db.run("INSERT INTO alunos(Matricula,Nome,Email,Cidade) values(777,'João da Silva','jaojao@exemple.com','Vitória')");

module.exports = {
    createTable,
    insertTable
}