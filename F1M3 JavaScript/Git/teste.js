var n = 15;
var divisores = 0

for (let j = 1; j <= n; j++) {
    if (n % j == 0) {
        console.log(j);
        divisores++;
    }
}
console.log("Há", divisores, "divisores de ", n, ".")