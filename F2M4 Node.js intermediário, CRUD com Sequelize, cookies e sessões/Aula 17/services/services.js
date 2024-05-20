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

    // Listar
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

    //Update
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

    //Delete
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
}