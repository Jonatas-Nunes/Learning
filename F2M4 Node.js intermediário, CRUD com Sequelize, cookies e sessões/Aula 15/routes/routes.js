// Models
const express = require('express');
const router = express.Router()
const usuarioController = require('../controller/usuarioController');
const tarefaController = require('../controller/tarefaController');

// Requisição HTTP Principal
router.get('/', (req,res) => {
    return res.json({message: 'Sistema de Lista de Tarefas'});
});

// Requisição HTTP Usuário
// POST - Cadastrar
router.post('/usuarios/Cadastrar', usuarioController.UsuarioCreate);

// GET - Listar
router.get('/usuarios/:id?', usuarioController.UsuarioListar);

// PUT - Update
router.put('/usuarios/:id', usuarioController.UsuarioUpdate);

// DELETE
router.delete('/usuarios/:id', usuarioController.UsuarioDelete);

// POST - Cadastrar Tarefas
router.post('/tarefas/Cadastrar', tarefaController.TarefaCreate);

// GET - Listar Tarefas
router.get('/tarefas/:id?', tarefaController.TarefaListar);

// PUT - Update Tarefas
router.put('/tarefas/:id', tarefaController.TarefaUpdate);

//DELETE Tarefa
router.delete('/tarefas/:id', tarefaController.TarefaDelete);

module.exports = router;