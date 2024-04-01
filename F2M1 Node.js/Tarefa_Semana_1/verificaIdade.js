const { differenceInYears } = require('date-fns');

function eMaior(nascimento) {
    nascimento = nascimento.split('/');
    var dataNascimento = new Date(nascimento[2], nascimento[1] - 1, nascimento[0]);
    var idade = differenceInYears(new Date(), dataNascimento);
    return idade >= 18;
}

module.exports = {
    eMaior
};