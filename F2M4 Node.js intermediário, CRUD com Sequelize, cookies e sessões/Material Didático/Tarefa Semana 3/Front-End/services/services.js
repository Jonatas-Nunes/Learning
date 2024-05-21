const axios = require('axios');

module.exports = class Services {
    static async TarefaCreate(req, res) {
        let valores = req.body;
        const options = {
            url: 'http://localhost:3000/tarefas/Cadastrar',
            method: 'POST',
            data: valores
        }
        axios(options);
        const mensagem = 'Cadastro realizado com sucesso!';
        res.render('mensagem', { mensagem });
    }

    // Listar Tarefas
    static async TarefaListar(req, res) {
        const options = {
            url: 'http://localhost:3000/tarefas',
            method: 'GET',
            data: {}
        }
        axios(options).then(response => {
            console.log(response.data);
            const tarefa = response.data;
            res.render('tarefas/listar', { tarefa });
        });
    }

    //Update Tarefas
    static async TarefaUpdate(req, res) {

        let valores = req.body;
        const options = {
            url: 'http://localhost:3000/tarefas/' + valores.id_tarefa,
            method: 'PUT',
            data: valores
        };
        axios(options);
        const mensagem = "Registro atualizado com sucesso";
        res.render("mensagem", { mensagem });
    }

    //Delete Tarefas
    static async TarefaDelete(req, res) {
        let id_tarefa = req.body.id_tarefa;
        const options = {
            url: 'http://localhost:3000/tarefas/' + id_tarefa,
            method: 'DELETE'
        }
        axios(options);
        const mensagem = 'Tarefa excluída com sucesso!';
        res.render('mensagem', { mensagem });
    }

    // CREATE Usuário
    static async UsuarioCreate(req, res) {
        let valores = req.body;
        const options = {
            url: 'http://localhost:3000/usuarios/Cadastrar',
            method: 'POST',
            data: valores
        }
        axios(options);
        const mensagem = 'Cadastro realizado com sucesso!';
        res.render('mensagem', { mensagem });
    }

    // Listar Usuários
    static async UsuarioListar(req, res) {
        const options = {
            url: 'http://localhost:3000/usuarios',
            method: 'GET',
            data: {}
        }
        axios(options).then(response => {
            console.log(response.data);
            const usuario = response.data;
            res.render('usuarios/listar', { usuario });
        });
    }
}