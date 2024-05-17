var express = require('express');
var router = express.Router();

// Lista de cidades
var cidades = [
  'Mimoso',
  'Cachoeiro',
  'Serra'
];

// Rota principal
router.get('/', (req, res) => {
  res.send('Rota de cliente inicial.');
});
router.get('/clientes', (req, res) => {
  res.send('Lista de todos os clientes.');
});

//Passagens de parâmetros dinâmicos
router.get('/clientes/:nome/:sobrenome?', (req, res) => {
  res.send('Seja bem vindo ' + req.params.nome + ' ' + req.params.sobrenome);
});

//Parâmetros da lista
router.get('/cidades/:id', (req, res) => {
  let id = req.params.id;
  return res.json([cidades[id]]);
});

//Rotas principal cidade
router.get('/cidades', (req, res) => {
  res.render('form');
});

//Parâmetro POST
router.post('/cidades/cadastrar', (req, res) => {
  let nome = req.body.nome;
  cidades[(cidades.length)] = nome;
  return res.json([cidades[(cidades.length - 1)]]);
});

module.exports = router;