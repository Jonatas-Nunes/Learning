const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const databasePath = 'escola.sqlite';

function criarTabela() {
    return new Promise((resolve, reject) => {
        const db = new sqlite3.Database(databasePath, (err) => {
            if (err) {
                reject(err.message);
            } else {
                console.log('Conectado ao banco de dados da Escola com sucesso!');
                db.run("CREATE TABLE IF NOT EXISTS alunos(Matricula int, Nome varchar(60), Email varchar(40), Cidade varchar (60))", (err) => {
                    if (err) {
                        reject('Erro ao criar tabela alunos: ' + err.message);
                    } else {
                        console.log('Tabela "alunos" criada com sucesso!');
                        resolve();
                    }
                });
            }
        });
    });
}

function inserirDados() {
    return new Promise((resolve, reject) => {
        const db = new sqlite3.Database(databasePath, (err) => {
            if (err) {
                reject(err.message);
            } else {
                db.run("INSERT INTO alunos(Matricula,Nome,Email,Cidade) VALUES(777,'João da Silva','jaojao@exemple.com','Vitória')");
                db.run("INSERT INTO alunos(Matricula,Nome,Email,Cidade) VALUES(778,'Maria da Conceição','marimari@exemple.com','Vila Velha')");
                db.run("INSERT INTO alunos(Matricula,Nome,Email,Cidade) VALUES(779,'José de Souza','mangojoe@exemple.com','Serra')");
                resolve();
            }
        });
    });
}

function acessarDados() {
    setTimeout(() => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const db =new sqlite3.Database(databasePath, (err) => {
                    if (err) {
                        reject(err.message); 
                    } else {
                        db.each("SELECT Matricula, Nome FROM alunos", (err, row) => {
                            if (err) {
                                reject(err.message);
                            } else {
                                console.log(row.Matricula + "\t" + row.Nome);
                            }
                        }, () => {
                            db.close((err) => {
                                if (err) {
                                    reject('Erro ao fechar o banco de dados: ' + err.message);
                                } else {
                                    console.log('Banco de dados fechado com sucesso!');
                                    resolve();
                                }
                            });
                        });
                    }
                });
            });
        });
    }, 1000);
}

criarTabela()
    .then(() => inserirDados())
    .then(() => acessarDados())
    .catch((err) => console.error('Erro', err));