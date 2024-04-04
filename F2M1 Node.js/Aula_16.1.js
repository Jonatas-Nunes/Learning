function registrarUsuario() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var erro = true;

            if (!erro) {
                resolve({ time: 5, message: 'Sucesso' });
            } else {
                reject();
            }
        }, 2000)
    });
}

// registrarUsuário()
// .then((dados) => {
//     console.log(dados.time);
//     console.log(dados.message);
// })
// .catch(() => {
//     console.log('Ocorreu um erro ao registra o usuário');
// });


async function main() {
    try {
        var dados = await registrarUsuario();

        console.log(dados);
    } catch (erro) {
        console.log('Ocorreu um erro ao registrar o usuário.')
    }
}


main();