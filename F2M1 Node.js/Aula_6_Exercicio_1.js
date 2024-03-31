function generateMessage (name, age, city) {
    const message = `Olá, meu nome é ${name} tenho ${age} anos e moro em ${city}.`;
    return message;
}

const prompt = require('prompt-sync')();
const personName = prompt('Digite seu nome: ');
const personAge = prompt('Digite sua idade: ');
const personCity = prompt('Digite a cidade onde você mora: ');

const formatedMessage = generateMessage(personName, personAge, personCity);

console.log(formatedMessage);