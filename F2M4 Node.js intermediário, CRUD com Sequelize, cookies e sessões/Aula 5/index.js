const express = require('express');
const app = express();

app.get('/', (req, res) => {
    // return res.send('Olá Mundo!');
    return res.json({message: 'Olá Mundo!'});
});

app.listen(3000);