n = 1;

while (n <= 100) {
    
    if (n % 10 !== 0) {
        console.log(n)
    } else if (n % 10 == 0) {
        console.log("Múltiplo de 10: ", n);
    }
    n++;
    
}