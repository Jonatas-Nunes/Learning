//Importando bibliotecas e arquivos
const database = require('./db');
const Cliente = require('./models/cliente');
const Fornecedor = require('./models/fornecedor');

// Criando o servidor
const express = require('express');
const app = express();
const porta = 9443;
const bodyParser = require('body-parser');

// Setar os valores da view e engine
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.use(bodyParser.json());
app.use(express.urlencoded({
  extended: true
}));
// Definindo rotas
app.get('/', (req, res) => {
  res.send('Bem vindo ao cadastro de clientes!');
});
app.get('/cadcliente', (req, res) => {
  res.render('formCliente');
});
app.post('/addcliente', (req, res) => {
  Cliente.create({
    nome: req.body.nome,
    nascimento: req.body.nascimento,
    cidade: req.body.cidade,
    telefone: req.body.telefone
  }).then(() => {
    res.send('<h1>Cliente cadastrado com sucesso!</h1>');
  });
});

// 8. No arquivo index.js, crie a rota POST para a operação create (criar) registros na tabela fornecedor.
app.get('/cadfornecedor', (req, res) => {
  res.render('formFornecedor');
});
app.post('/addfornecedor', (req, res) => {
  Fornecedor.create({
    nome: req.body.nome,
    telefone: req.body.telefone,
    email: req.body.email
  }).then(() => {
    res.send('<h1>Fornecedor cadastrado com sucesso!</h1>');
  });
});

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
  const url = `http://localhost:${porta}`;
  import('open').then(open => open.default(url));
});

(async () => {

  try {
    const resultado = await database.sync();
    console.log(resultado);
    const clientes = await Cliente.findAll();
    console.log('Lista de Clientes \n', clientes);
    const fornecedores =  await Fornecedor.findAll();
    console.log('Lista de Fornecedores \n', fornecedores);
  } catch (error) {
    console.log(error);
  }

})();