const express = require('express');
const app = express();
const porta = 3000;

app.get('/', (req, res) => {
    res.send('Olá Mundo! Estou usando o Express!');
});

const servidor = app.listen(porta, () => {
    console.log('App rodando!')
    const url = `http://localhost:${porta}`;
    import('open').then(open => open.default(url));
});