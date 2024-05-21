const express = require('express');
const Services = require('../services/services');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Seja bem Vindo ao nosso sistema de Tarefas.');
});

router.get('/tarefas/cadastrar', (req, res) => {
    res.render('tarefas/cadastrar');
});

// CREATE - Rota Service tarefa
router.post('/tarefas/Create', Services.TarefaCreate);

// LISTAR - Rota Service Listar tarefa
router.get('/tarefas/listar', Services.TarefaListar);

// UPDATE - Rota get Service Update tarefa
router.get('/tarefas/Atualizar/:id_tarefa/:titulo/:descricao', (req, res) => {
    let tarefas = {
        id_tarefa: req.params.id_tarefa,
        titulo: req.params.titulo,
        descricao: req.params.descricao
    }
    res.render('tarefas/update', {tarefas});
});

// UPDATE - Rota post Service Update tarefa
router.post('/tarefas/Update', Services.TarefaUpdate);

// DELETE - Rota Service Delete tarefa
router.post('/tarefas/Delete', Services.TarefaDelete);

// CREATE - Rota Service Usuário
router.post('/usuarios/Create', Services.UsuarioCreate);

// LISTAR - Rota Service Usuário
router.get('/usuarios/listar', Services.UsuarioListar);

router.get('/usuarios/cadastrar', (req, res) => {
    res.render('usuarios/cadastrar');
});

module.exports = router;