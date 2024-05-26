const express = require('express');
const app = express();
const hand = require('express-handlebars');
const Services = require('./services/services');
const routes = require('./routes/routes');

//Cookies
const cookieParser = require('cookie-parser');

app.engine('handlebars', hand.engine());
app.set('view engine', 'handlebars');
app.use(cookieParser());
app.use(express.urlencoded( { extended: true, } ));
app.use(express.json());

app.use('/', routes);

app.listen(9443, () => {
    console.log('Servidor rodando na porta 9443');
    const url = `http://localhost:${9443}/`;
    import('open').then(open => open.default(url));
});