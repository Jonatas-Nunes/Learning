const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './cliente.sqlite'
});

try {
  sequelize.authenticate();
  console.log('Banco de dados conectado com sucesso!');
} catch (err) {
  console.log('Erro ao conectar ao banco de dados.', err);
}

module.exports = sequelize;