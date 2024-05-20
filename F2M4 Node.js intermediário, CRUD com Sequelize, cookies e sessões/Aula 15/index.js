const express = require('express');
const app = express();
const database = require('./db/db');
const routes = require('./routes/routes');

//Models
const Usuario = require('./model/usuarioModel');
const Tarefa = require('./model/tarefaModel');

//Codificação JSON
app.use(express.urlencoded( { extended: true } ));
app.use(express.json());

app.use('/', routes);

try {
    database.sync().then(() => {

    });
} catch(err) {
    console.log('Houve uma falha ao sincronizar com o banco de dados.', err);
}

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
  const url = `http://localhost:${3000}`;
  import('open').then(open => open.default(url));
});