const Sequelize = require('sequelize');
const database = require('../db/db');

const Funcionario = database.define('funcionario', {
  matricula: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false
  },
  endereco: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: true
  },
  nascimento: {
    type: Sequelize.DATE,
    allowNull: true
  }
}, { database, modelName: 'funcionario', tableName: 'funcionarios'});

module.exports = Funcionario;