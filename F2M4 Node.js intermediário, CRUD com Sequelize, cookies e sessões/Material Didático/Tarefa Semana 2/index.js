const express = require('express');
const app = express();
app.use(express.urlencoded( { extended: true} ));
app.use(express.json());

const database = require('./db/db');
const Cliente = require('./model/clienteModel');
const clienteController = require('./controller/clienteController');

//Sincronismo com o Banco de Dados
try {
  database.sync().then(() => {

  });
} catch (err) {
  console.log('Houve uma falha ao sincronizar com o banco de dados.', err);
}

//Rotas 
app.get('/', (req, res) => {
  return res.json( { message: 'Seja bem vindo ao nosso sistema de Clientes!' });
});

//POST - Rota para o cadastro de Clientes
app.post('/Cadastrar', clienteController.ClienteCreate);

//GET - Rota para listar todos os Clientes
app.get('/Clientes/:id?', clienteController.clienteListar);

//UPDATE - Rota para atualizar um Cliente
app.put('/Clientes/:id', clienteController.ClienteUpdate);

//DELETE - Rota para deletar um Cliente
app.delete('/Clientes/:id', clienteController.ClienteDelete);

app.listen(3000, () =>{
  console.log('Server is running on port 3000.');
});