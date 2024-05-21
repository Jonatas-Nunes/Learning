const Sequelize = require('sequelize');
const database = require('../db/db');

const Tarefa = database.define('tarefa', {
  id_tarefa: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  titulo: {
    type: Sequelize.STRING,
    allowNull: false
  },
  descricao: {
    type: Sequelize.STRING,
    allowNull: false,
  }
}, { database, modelName: 'tarefa', tablename: 'tarefas'});

module.exports = Tarefa;