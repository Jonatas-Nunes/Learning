// BIBLIOTECAS/MÓDULOS UTILIZADOS  
const Sequelize =  require('sequelize');
// CRIANDO A CONFIGURAÇÃO DO BANCO DE DADOS
 const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './filmes.sqlite'
 }); 

 // TRATANDO POSSÍVEIS ERROS E AUTENTICAÇÃO NO BANCO
 try {
    sequelize.authenticate();
    console.log('Banco de dados conectado com sucesso!');
 } catch (err) {
    console.log ('Erro ao conectar ao banco de dados', err);
 }

 module.exports = sequelize;