//PS: Professor, fiz essa tarefa semanal no VSCode|
//PS: Professor, fiz essa tarefa semanal no VSCode|
//PS: Professor, fiz essa tarefa semanal no VSCode|

const Sequelize = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './cliente.sqlite'
});

module.exports = sequelize;