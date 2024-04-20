const express = require('express');
const app = express();
const porta = 443;

app.get('/', (req, res) => {
    res.send('Bem vindo ao Servidor Web Utilizando o Express');
});

const servidor = app.listen(porta, () => {
    console.log('Servidor Rodando')
    const url = `http://localhost:${porta}`;
    import('open').then(open => open.default(url));
});