const axios = require ('./API_Aula_17.1');

async function carregarEstados() {
 
    try {
        var response = await axios.api.get('/estados/ES');
        console.log(response.data);
    } catch(erro) {
        console.log('Ocorreu um erro ao buscar o estado');
 
   }

}

async function alterarEstados() {

    try {
        var response = await axios.api.put('/estados/ES', {
            nome: 'Espírito Santo'
        })
        console.log(response.data);
    } catch(erro) {
        console.log('Ocorreu um erro ao alterar estado');
    }
}

// carregarEstados();
alterarEstados();