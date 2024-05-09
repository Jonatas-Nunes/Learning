const { Sequelize, Model, DataTypes } = require("sequelize");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "empresa-aula-7.sqlite"
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

  const setor_create = await Setor.create({
    nome: "Financeiro", 
    ramal: "2134", 
    email: "financeiro@empresa.com"
  });
  const setor_create_S = await Setor.create({
    nome: "Secretaria", 
    ramal: "2135", 
    email: "secretaria@empresa.com"
  });
  const setor_create_P = await Setor.create({
    nome: "Portaria",
    ramal: "2136",
    email: "portaria@empresa.com"
  });

  const setores_listar = await Setor.findAll();
  console.log('Lista de setores: \n', JSON.stringify(setores_listar, null, 2), '\n\n');
})();