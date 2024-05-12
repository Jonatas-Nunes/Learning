// Bibliotecas/Módulos Utilizados
const database = require('./db/db');
const express = require('express');
const app = express();
const Video = require('./models/Video');
const VideoRoutes = require('./routes/routesVideo');
const hand = require('express-handlebars');

//Controllers
const VideoControllers = require('./controllers/ControllerVideo');
app.engine('handlebars', hand.engine());
app.set('view engine', 'handlebars');
app.set(express.urlencoded({extended: true,}));

app.use(express.json());
app.use(express.static('public'));

//Rotas
app.use('/', VideoRoutes);

//Sincronismo do Banco de Dados
try {
  database.sync().then( () => {
    app.listen(9443, () => {
      console.log('Servidor rodando');
      const url = `http://localhost:${9443}`;
      import('open').then(open => open.default(url));
    });
  });
} catch (err) {
  console.log('Houve uma falha ao sincronizar com o banco de dados', err);
}