//index.js da Aula_10.1.js
const express = require('express');
const rotas = require('./Aula_10.1.js');
const porta = 443;
const app = express();

app.use('/', rotas);

app.listen(porta, () => {
  console.log('Servidor rodando.');
  const url = `http://localhost:${porta}`;
  import('open').then(open => open.default(url));
});