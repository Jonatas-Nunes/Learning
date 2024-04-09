const axios = require('./API_Aula_17.1');

async function carregarEstados() {

    try {
        var response = await axios.api.get('/estados/ES');
        console.log(response.data);
    } catch (erro) {
        console.log('Ocorreu um erro ao buscar o estado');

    }

}

async function alterarEstados() {

    try {
        var response = await axios.api.put('/estados/ES', {
            nome: 'São Paulo'
        });
        console.log(response.data);
    } catch (erro) {
        console.log('Ocorreu um erro ao alterar estado');
    }
}

async function incluirEstado() {

    try {
        var response = await axios.api.post('/estados', {
            id: 'SP',
            nome: 'São Paulo'
        });

        console.log(response.data);
    } catch {
        console.log('Ocorreu um erro ao incluir o novo estado');
    }
}

async function deletarEstado() {
    axios.api.delete('./estados/SP')
        .then(() => {
            console.log('Estado deletado com sucesso!');
        })
        .catch((erro) => {
            console.log('Ocorreu um erro ao deletar o estado')
        });
}

// carregarEstados();
alterarEstados();
// incluirEstado();
// deletarEstado();