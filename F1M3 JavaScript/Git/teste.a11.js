const prompt = require('prompt-sync')();

var array1 = [];
var array2 = [];
var array3 = [];

console.log("Array 1");
for (var i = 0; i <= 3; i++) {
	array1.push(parseInt(prompt("Digite um número (0 a 9): ")));
}

for (var i = 0; i <= 3; i++) {
	array2.push(parseInt(prompt("Digite um número (0 a 9): ")));
}

for (var i = 0; i <= 3; i++) {
	array3.push(array1[i] + array2[i])
}

console.log(array3);