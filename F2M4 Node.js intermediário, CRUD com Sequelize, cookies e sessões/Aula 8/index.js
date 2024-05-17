//Bibliotecas/Módulos Utilizados
const express  = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const database = require('./db/db');
const Funcionario = require('./model/funcionarioModel');
const funcionarioController = require('./controller/funcionarioController');

//Sincronismo com o Banco de Dados
try {
  database.sync().then(() => {
    
  });
} catch (err) {
  console.log('Houve uma falha ao sincronizar com o Banco de Dados', err);
}

app.get('/', (req, res) => {
  return res.json({ message: 'Hello World'});
});

//POST - Cadastrar
app.post('/Cadastrar', funcionarioController.FuncionarioCreate);

// GET - Listar
app.get('/Funcionarios/:id?', funcionarioController.funcionarioListar);

// PUT - Atualizar
app.put('/Funcionarios/:id', funcionarioController.FuncionarioUpdate);

// DELETE - Deletar
app.delete('/Funcionarios/:id', funcionarioController.FuncionarioDelete);

app.listen(3000, () => {
  console.log('Server is running on port 3000. Acess bu url: http://localhost:3000/');
  const url = `http://localhost:${3000}`;
  import('open').then(open => open.default(url));
});