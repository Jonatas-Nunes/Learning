sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('empresa.sqlite', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Conectado ao banco de dados da Empresa com sucesso!');
    db.run("CREATE TABLE setor(idsetor int, nome varchar(40), ramal varchar(4), e_mail varchar(30))");
    db.run("CREATE TABLE funcionarios(matricula int primary key, id_setor int null, nome varchar(40), nascimento date, telegone varchar(15))");
});
