//importar as blibiotecas que iremos utilizar
const {Sequelize, Model, DataTypes} = require('sequelize');

// abrindo conexão com o banco de dados
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "empresa-aula-4.sqlite"
});

(async () => {
  // Sincronismo
  await sequelize.sync({force: true});
})();