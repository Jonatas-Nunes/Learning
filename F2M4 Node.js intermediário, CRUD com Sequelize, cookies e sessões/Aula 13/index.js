const express = require('express');
const app = express();

var cookie = require('cookie-parser');
app.use(cookie());

let user1 = {
    nome: 'Ana',
    apelido: 'Aninha',
    idade: '22',
    cidade: 'Anchieta'
}

let user2 = {
    nome: 'João Pedro',
    apelido: 'Jão',
    idade: '26',
    cidade: 'Vitória'
}

let user3 = {
    nome: 'Rafael',
    apelido: 'Rafa',
    idade: '19',
    cidade: 'Vila Velha'
}



app.get('/adicionar/usuario1', (req, res) => {
    res.cookie('usuarioDados1', user1, { expire: 400000 + Date.now() });
    res.send('Dados dos usuários adicionados com sucesso');
});

app.get('/adicionar/usuario2', (req, res) => {
    res.cookie('usuarioDados2', user2, { expire: 400000 + Date.now() });
    res.send('Dados dos usuários adicionados com sucesso');
});

app.get('/adicionar/usuario3', (req, res) => {
    res.cookie('usuarioDados3', user3, { expire: 400000 + Date.now() });
    res.send('Dados dos usuários adicionados com sucesso');
});

app.get('/usuario', (req, res) => {
    const usuarios = {
        usuario1: req.cookies.usuarioDados1,
        usuario2: req.cookies.usuarioDados2,
        usuario3: req.cookies.usuarioDados3
    }
    res.send(usuarios);
});

app.get('/usuario1', (req, res) => {
    res.send(req.cookies.usuarioDados1);
});

app.get('/usuario1/nome', (req, res) => {
    res.send(req.cookies.usuarioDados1.nome);
});

app.get('/usuario2', (req, res) => {
    res.send(req.cookies.usuarioDados2);
});

app.get('/usuario2/nome', (req, res) => {
    res.send(req.cookies.usuarioDados2.nome);
});

app.get('/usuario3', (req, res) => {
    res.send(req.cookies.usuarioDados3);
});

app.get('/usuario3/nome', (req, res) => {
    res.send(req.cookies.usuarioDados3.nome);
});

app.get('/', (req, res) => {
    res.send('Seja bem Vindo ao teste de cookies.');
});

app.get('/logout', (req, res) => {
    res.clearCookie('usuarioDados2');
    res.send('Usuário desconectado com sucesso.');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000.');
    const url = `http://localhost:${3000}`;
    import('open').then(open => open.default(url));
});