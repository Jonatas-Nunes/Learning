const express = require('express');;
const fs = require('fs');
const app = express();
const porta = 443;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

const server = app.listen(porta, () => {
  console.log('Servidor rodando');
});