const express = require("express");
const Services = require("../services/services");
const router = express.Router();

/* router.get("/", (req, res) => {
    res.send("Seja bem Vindo ao nosso sistema de Varejo Virtual.");
}); */

router.get('/', Services.LivroListar);

router.post("/login", Services.UsuarioLogin);

router.get("/login", (req, res) => {
    res.render("usuarios/login");
});

router.get('/usuarios/Cadastrar', (req, res) => {
    res.render('usuarios/Cadastrar');
});

router.post('/usuarios/Cadastrar', Services.UsuarioCreate);

// PRODUTO
router.get('/livros/Cadastrar', (req, res) => {
    res.render('livros/Cadastrar');
});
router.post('/livros/Cadastrar', Services.LivroCreate);

router.get("/livros/listar", Services.LivroListar);

// Rotas para os cookies
router.get('/carrinho/Adicionar/:id/:nome', Services.CarrinhoAdicionar);
router.get('/carrinho/Listar', Services.CarrinhoListar);
router.get('/carrinho/remover/:item', Services.CarrinhoRemoverItem);

module.exports = router;