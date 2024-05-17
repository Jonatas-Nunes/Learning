const express = require('express');
const app = express();
const porta = 3000;
var Route = require('./routes/Route');

// Handlebars
const hand = require("express-handlebars");
app.set('view engine', 'html');
app.engine("handlebars", hand.engine());
app.set("view engine", "handlebars");


app.use(express.urlencoded({ extended: true }));

app.use('/', Route);

app.listen(porta, () => {
  console.log('Servidor rodando na porta ' + porta);
  const url = `http://localhost:${porta}`;
  import('open').then(open => open.default(url));
});