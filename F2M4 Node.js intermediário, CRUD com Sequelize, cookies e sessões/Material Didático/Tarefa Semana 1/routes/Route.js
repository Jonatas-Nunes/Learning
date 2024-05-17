var express = require('express');
var router = express.Router();

//Lista de Estados
var estados = [
  { id: 1, nome: 'Acre' },
  { id: 2, nome: 'Alagoas' },
  { id: 3, nome: 'Amapá' }
]

//Rota principal
router.get('/', (req, res) => {
  res.send('Rota de cliente inicial. \n\n1. Utilize a requisição "/estados" para acessar a lista de estados. \n2. Utilize a requisição "/estados/form" para acessar o formulário de cadastro de estados.');
});

//Rota para listar os estados
router.get('/estados', (req, res) => {
  res.json(estados);
});

//Rota para a lista de estados
router.get('/estados/form', (req, res) => {
  res.render('form');
});

//Rota para o formulário de cadastro de estados
router.post('/estados/cadastrar', (req, res) => {
  let nome = req.body.nome;
  estados[estados.length] = { id: estados.length + 1, nome: nome };
  return res.json([estados[(estados.length - 1)]])
});

module.exports = router; 