const prompt = require('prompt-sync')();

var array = []
var array1 = []
var sum = 0;

for (i = 0; i <= 7; i++) {
    array.push(parseInt(prompt("Digite um número: ")));
    sum += array[i];
}

var avarege = sum / 8

for (i = 0; i<= 7; i++) {
    
    if (array[i] > avarege) {
        array1.push(array[i])
    }
}

console.log("A média é: ", avarege);
console.log("Os número inseridos acima da média são: ", array1);