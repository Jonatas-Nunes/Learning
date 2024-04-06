const axios = require('./API_Aula_17.1.js');

function carregarEstados() {
    axios.api.get('/estados/ES')
    .then((response) => {
        console.log(response.data);
    });
}

carregarEstados();