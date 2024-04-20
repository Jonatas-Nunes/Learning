const express = require('express');
const app = express();
const porta = 443;

app.get('/contato', (req, res) => {
  res.send('Contato');
});
app.get('/sobre', (req, res) => {
  res.send('Sobre');
});
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Aula_7.1.html');
});

const servidor = app.listen(porta, () => {
  console.log('Servidor Rodando!');
  const url = `http://localhost:${porta}`;
  import('open').then(open => open.default(url));
});