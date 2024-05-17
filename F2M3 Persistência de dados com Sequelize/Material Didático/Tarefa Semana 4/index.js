//BIBLIOTECAS/MODLOS UTILIZADOS
const database = require('./db/db');
const express = require('express');
const app = express();
const Filmes = require('./models/Filmes');
const FilmeRoutes = require('./routes/routesFilmes');
const hand = require('express-handlebars');

// CONTROLLERS
const FilmeControllers = require('./controllers/ControllerFilme');
app.engine('handlebars', hand.engine());
app.set('view engine', 'handlebars');
app.use(express.urlencoded({extended: true,}))

app.use(express.json());
app.use(express.static('public'));

// ROTAAS
app.use('/', FilmeRoutes);

// SINCRONISMO COM O BANCO DE DADOS
try {
    database.sync().then(() => {
        app.listen(9443, () => { console.log('Servidor rodando.') });
        const url = `http://localhost:${9443}`;
        import('open').then(open => open.default(url));
    });
} catch (err) {
    console.log('Erro ao sincronizar com o banco de dados.', err);
}