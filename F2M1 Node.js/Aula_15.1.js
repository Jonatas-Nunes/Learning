function cadastrarUsuário() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            //lógica para cadastrar o usuário

            var erro = false;

            if (!erro) {
                resolve('Sucesso');
            } else {
                reject('Ocorreu um erro.');
            }
        }, 2000);
    });
}

cadastrarUsuário()
.then((message) => {
    console.log(message);
})
.catch((message) => {
    console.log(message);
});