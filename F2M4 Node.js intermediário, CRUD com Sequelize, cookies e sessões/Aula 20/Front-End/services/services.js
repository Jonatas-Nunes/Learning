const axios = require("axios");
module.exports = class Services {
    //VERIFICAR USUÁRIO
    static async UsuarioLogin(req, res) {
        let valores = req.body;
        const options = {
            url: 'http://localhost:3000/login',
            method: 'POST',
            data: valores
        }
        axios(options).then((usuario) => {
            if (usuario != undefined) {
                return res.render('logado');
            }
        });
    }

    // Create Usuário
    static async UsuarioCreate(req, res) {
        let valores = req.body;
        const options = {
            url: 'http://localhost:3000/add_usuario',
            method: 'POST',
            data: valores
        };
        axios(options);
        const mensagem = "Cadastro realizado com sucesso!";
        res.render("mensagem", { mensagem });
    }

}