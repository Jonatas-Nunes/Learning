var str = 'Instituto Federal do Espírito Santo';

console.log(str.length);

console.log(str.toUpperCase());

console.log(str.toLowerCase());

console.log(str.replace('Espírito Santo', 'Rio de Janeiro'));

if(str.endsWith('Santo')){
    console.log('Termina com a palavra Santo');
}

if(str.startsWith('I')) {
    console.log('Começa com a letra I');
}