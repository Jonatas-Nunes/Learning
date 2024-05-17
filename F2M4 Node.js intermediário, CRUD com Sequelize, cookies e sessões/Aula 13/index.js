const express = require('express');
const app = express();

var cookie = require('cookie-parser');
app.use(cookie());

let usuario = {
    nome: "Carla",
    idade: "18",
}

app.get('/adicionar/usuario', (req, res) => {
    res.cookie('usuarioDados', usuario);
    res.send('Dados do Usuário adicionado com sucesso');
}); 

app.get('/usuario', (req, res) => {
    res.send(req.cookies);
})

app.get('/', (req, res) => {
    res.send('Seja bem Vindo ao teste de cookies.');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000.');
    const url = `http://localhost:${3000}`;
    import('open').then(open => open.default(url));
});