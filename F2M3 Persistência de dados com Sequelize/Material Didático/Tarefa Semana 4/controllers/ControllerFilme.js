const Filme = require('../models/Filmes');

module.exports = class FilmeController {
    static cadastrarFilme(req, res) {
        res.render('../views/filmes/Cadastrar');
    }

    // CREATE
    static async FilmeCreate(req, res) {
        const filme = {
            titulo: req.body.titulo,
            categoria: req.body.categoria,
            genero: req.body.genero,
            Link_sinopse: req.body.Link_sinopse
        }
        await Filme.create(filme);
        res.send('<h1>Cadastro executado com sucesso!</h1>');
    }

    // READ
    static async listarFilme(req, res) {
        const filme = await Filme.findAll({raw: true});
        res.render('../views/filmes/listar', {filme});
    }

    // UPDATE
    static async UpdateFilme(req, res) {
        const id_filme = req.params.id_filme;
        const filme = await Filme.findOne({ where: {id_filme: id_filme}, raw: true });
        res.render('../views/filmes/update', {filme});  
    }

    static async FilmeUpdate(req, res) {
        const id_filme = req.body.id_filme;
        const filme = {
            titulo: req.body.titulo,
            categoria: req.body.categoria,
            genero: req.body.genero,
            Link_sinopse: req.body.Link_sinopse
        }
        await Filme.update(filme, { where: { id_filme: id_filme }});
        res.redirect('/');
    }

    // DELETE
    static async removerFilme(req, res) {
        const id_filme = req.body.id_filme;
        await Filme.destroy( { where: { id_filme: id_filme }, raw: true } );
        res.redirect('/');
    }
}