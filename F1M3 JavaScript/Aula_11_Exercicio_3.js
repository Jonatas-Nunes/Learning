const prompt = require('prompt-sync')();

var array1 = [];
var array2 = [];
var array3 = [];

for (i = 0; i <= 4; i++) {
    array1.push(parseFloat(prompt("Digite um número: ")));
}

console.log("Os dados inseridos foram: ", array1);

for (i = 0; i <= 4; i++) {
    array2.push(parseFloat(prompt("Digite um número: ")))
}
console.log("Os dados inseridos foram: ", array2);

for (i = 0; i <= 4; i++) {
    for (j = 0; j <= 4; j++) {
        if (array1[i] == array2[j]) {
            array3.push(array1[i]);
        }
    }
}
console.log("A interseção entre os dados inseridos são: ", array3);