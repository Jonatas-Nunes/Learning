// Bibliotecas/Módulos Utilizados
const Sequelize = require('sequelize');

// Criando a configuração do Banco de Dados
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './mercado.sqlite'
});

// Tratando possíveis erros e autenticação no Banco de Dados
try {
  sequelize.authenticate();
  console.log('Banco de Dados Conectado com Sucesso');
} catch (err) {
  console.log('Erro ao Conectar ao Banco de Dados', err);
}

module.exports = sequelize;