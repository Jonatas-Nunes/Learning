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
    nome: 'Hugo',
    apelido: 'UgaUga',
    idade: '23',
    cidade: 'Piuma'
}

let user3 = {
    nome: 'Felipe',
    apelido: 'Talarico',
    idade: '26',
    cidade: 'São Paulo'
}

app.get('/adicionar/usuario', (req, res) => {
    res.cookie('usuario1', user1, { expire: 400000 + Date.now() });
    res.cookie('usuario2', user2, { expire: 400000 + Date.now() });
    res.cookie('usuario2', user3, { expire: 400000 + Date.now() });

    res.send('Dados dos usuários adicionados com sucesso');
}); 

app.get('/usuario', (req, res) => {
    res.send(req.cookies);
});
app.get('usuario/user1', (req, res) => {
    res.send(req.cookies.usuario1);
});
app.get('usuario/user2', (req, res) => {
    res.send(req.cookies.usuario2);
});
app.get('usuario/user3', (req, res) => {
    res.send(req.cookies.usuario3);
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