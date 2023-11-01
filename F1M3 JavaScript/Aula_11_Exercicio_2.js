const prompt = require('prompt-sync')();

var array1 = [1, 2, 3, 4];
var array2 = [5, 6, 7, 8];
var array3 = [];
var soma = 0
var i =  0;

while (i <= 3) {
    soma = array1[i] + array2[i];
    array3.push(soma);
    i++;
}
console.log(array3)