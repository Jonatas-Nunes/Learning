const axios = require("axios");
const endereco = 'http://localhost:9443/';

module.exports = class Services {

    static endereco = 'http://localhost:9443/';

    // VERIFICAR USUÁRIO
    static async UsuarioLogin(req, res) {
        let valores = req.body;
        const options = {
            url: endereco + 'login',
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
            url: endereco + 'add_usuario',
            method: 'POST',
            data: valores
        };
        axios(options);
        const mensagem = "Cadastro realizado com sucesso!";
        res.render("mensagem", { mensagem });
    }

    // CREATE - Produto
    static async LivroCreate(req, res) {
        let valores = req.body;
        const options = {
            url: endereco + 'add_livros',
            method: 'POST',
            data: valores
        };
        axios(options);
        const mensagem = "Cadastro realizado com sucesso!";
        res.render("mensagem", { mensagem });
    }


    // LISTAR 
    static async LivroListar(req, res) {
        const options = {
            url: endereco + 'livros',
            method: 'GET',
            data: {}
        };
        axios(options).then(response => {
            console.log(response.data);
            const livro = response.data
            res.render("livros/listar", { livro });
        });
    }

    // Cookies
    static async CarrinhoAdicionar(req, res) {
        const Item = {
            id: req.params.id,
            titulo: req.params.titulo
        }
        if (req.cookies.carrinho) { // Verificando se já existe um cookie para o carrinho
            const carrinho = JSON.parse(req.cookies.carrinho); // Se existe, adiciona o novo item
            carrinho.push(Item);
            res.cookie('carrinho', JSON.stringify(carrinho), {
                maxAge: 900000,
                httpOnly: true
            });
        } else {
            const carrinho = [Item]; // Se não existe, cria um novo carrinho com o item
            res.cookie('carrinho', JSON.stringify(carrinho), {
                maxAge: 900000,
                httpOnly: true
            });
        }
        res.send('Item adicionado ao carrinho');
    }

    // Rota para remover um item do carrinho
    static async CarrinhoRemoverItem(req, res) {
        const itemDeletar = req.params.item; // Verificando se existe um cookie para o carrinho
    
        if (req.cookies.carrinho) { // Obtendo o carrinho atual do cookie
            let carrinho = JSON.parse(req.cookies.carrinho); // Removendo o item do carrinho, se existir
            carrinho = carrinho.filter(item => item.id !== itemDeletar); // Atualizando o cookie com o carrinho modificado
            res.cookie('carrinho', JSON.stringify(carrinho), {
                maxAge: 900000,
                httpOnly: true
            });
            res.send('Item removido do carrinho');
        } else {
            res.send('Carrinho vazio');
        }
    }


    static async CarrinhoListar(req, res) {
        // Rota para exibir o carrinho
        if (req.cookies.carrinho) {
            const carrinho = JSON.parse(req.cookies.carrinho);
            res.render('carrinhos/Listar', { carrinho });
        } else {
            res.send('Carrinho vazio');
        }
    }

}