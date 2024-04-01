const texto = 'JavaScript é Incrível!';

const emMaiusculas = texto.toUpperCase();
const emMinusculas = texto.toLowerCase();
const semEspacos = texto.trim();
const comSubstituicao = texto.replace('Incrível', 'Poderoso');
const terminaComExclamação = texto.endsWith('!');
const comecaComJavaScript = texto.startsWith('JavaScript');
const partes = texto.split(' ');
const incluir = texto.includes('JavaScript');

console.log(emMaiusculas);
console.log(emMinusculas);
console.log(semEspacos);
console.log(comSubstituicao);
console.log(terminaComExclamação);
console.log(comecaComJavaScript);
console.log(partes);
console.log(incluir);