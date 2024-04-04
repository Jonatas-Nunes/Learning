function cadastrarUsuario(callback) {
    setTimeout(() => {
        //lógica de cadastro de usuário...

        callback(new Error('Erro no registro do Usuário'));
    }, 2000);
}

registrarUsuario((erro) => {

    if (erro) {
        return console.log('Ocorreu um erro: ' + erro.message);
    }

    console.log('Usuário registrado com sucesso');
});