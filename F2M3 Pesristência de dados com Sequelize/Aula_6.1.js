const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "empresa-aula-6.sqlite"
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

class Funcionarios extends Model {
    static init(sequelize) {
        super.init({
            matricula: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true
            },
            idsetor: {
                type: DataTypes.INTEGER,
                references: {
                    model: Setor,
                    key: 'idsetor'
                },
                nome: {
                    type: DataTypes.STRING(60),
                    allowNull: false
                },
                nascimento: {
                    type: DataTypes.DATE
                }, telefone: {
                    type: DataTypes.STRING(15)
                }
            }
        }, {sequelize, modelName: 'funcionario', tableName:'funcionarios'});
    }
}

(async () => {
  await sequelize.sync({ force: true });
})();