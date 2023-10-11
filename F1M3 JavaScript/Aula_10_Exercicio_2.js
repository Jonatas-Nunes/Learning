const prompt = require('prompt-sync')();

var n =  parseInt(prompt("Insert a whole Number: "));
var i = 1;
var soma = 0;

console.log("The dividers of", n, "are: ");
while (i < n) {
    if (n % i == 0) {
        console.log(i)
        soma += i;
    }
    i++;
}

if (soma == n) {
    console.log("The sum of the dividers of", n, "is a perfect number")
} else {
    console.log("The sum of the dividers of", n, "are: ", soma);
}
