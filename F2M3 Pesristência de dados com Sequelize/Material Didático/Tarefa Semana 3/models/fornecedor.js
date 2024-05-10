//PS: Professor, fiz essa tarefa semanal no VSCode|
//PS: Professor, fiz essa tarefa semanal no VSCode|
//PS: Professor, fiz essa tarefa semanal no VSCode|

// 6. Crie o model fornecedor com os seguintes campos:

const Sequelize = require('sequelize');
const database = require('../db');

const Fornecedor = database.define('fornecedor', {
  // a. id tipo int restrição primary key;
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  // b. nome tipo string;
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  // c. telefone tipo string;
  telefone: {
    type: Sequelize.STRING,
    allowNull: false
  },
  // d. email tipo string;
  email: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Fornecedor;