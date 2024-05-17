const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "empresa-aula-5.sqlite"
});

class Setor extends Model {
  static init(sequelize) {
    super.init({
      idsetor: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      nome: {
        type: DataTypes.STRING(40),
        allowNull: false
      },
      ramal: {
        type: DataTypes.STRING(10),
        allowNull: false
      },
      email: {
        type: DataTypes.STRING(30)
      }
    }, {sequelize, modelName: 'setor', tableName: 'setores'});
  }
}

Setor.init(sequelize);

(async () => {
  await sequelize.sync({ force: true });
})();