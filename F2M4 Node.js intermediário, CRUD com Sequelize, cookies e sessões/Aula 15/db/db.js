// Biblioteca/ Módulos utilizados
const Sequelize = require('sequelize');

// Criando a configuração do banco de dados
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './mercado.sqlite'
});

// Tratando possíveis erros e autenticação no banco de dados
 try {
   sequelize.authenticate();
   console.log('Banco de dados conectado com sucesso!');
 } catch (err) {
   console.log('Erro ao conectar ao banco de dados', err);
 }

module.exports = sequelize;