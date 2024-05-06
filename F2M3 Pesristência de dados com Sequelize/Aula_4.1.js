// importar as bibliotecas que iremos utilizar
const {Sequelize, model, DataType} = require("sequelize");

//abrindo conexão com o banco
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "empresa-sqlite-aula-4.1"
});

(async () => {
    //Sincronismo
    await sequelize.sync({force: true});
})();