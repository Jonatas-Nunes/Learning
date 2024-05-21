const axios = require("axios");
module.exports = class Services {

    // VERIFICAR USUÁRIO
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

    // CREATE - Produto
    static async ProdutoCreate(req, res) {
        let valores = req.body;
        const options = {
            url: 'http://localhost:3000/add_produtos',
            method: 'POST',
            data: valores
        };
        axios(options);
        const mensagem = "Cadastro realizado com sucesso!";
        res.render("mensagem", { mensagem });
    }


    // LISTAR 
    static async ProdutoListar(req, res) {
        const options = {
            url: 'http://localhost:3000/produtos',
            method: 'GET',
            data: {}
        };
        axios(options).then(response => {
            console.log(response.data);
            const produto = response.data
            res.render("produtos/listar", { produto });
        });
    }

}