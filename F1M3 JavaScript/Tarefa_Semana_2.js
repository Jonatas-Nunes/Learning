const prompt = require('prompt-sync')();

var age = parseInt(prompt("Informe a sua idade: "));
var job_time = parseInt(prompt("Informe seu tempo de trabalho contribuído: "));
var last_wage = parseFloat(prompt("Informe seu salário: "));
var retirement = 0;

if (age >= 65 || job_time >= 30 || ((age >= 60) && (job_time >= 25))) {
    console.log("Você pode se aposentar!");
    if (job_time > 20) {
        var retirement = 0.8 * last_wage;
        if (retirement >= 7087.22) {
            console.log("Seu salário de aposentado é: R$ 7087,22");
        } else if (retirement <= 1212) {
            console.log("Seu salário de aposentado é: R$ 1212,00");
        } else {
            console.log("Seu salário de aposentado é: R$", retirement);
        }
    } else if (job_time <= 20) {
        var retirement = 0.6 * last_wage;
        if (retirement >= 7087.22) {
            console.log("Seu salário de aposentado é: R$ 7087,22");
        } else if (retirement <= 1212) {
            console.log("Seu salário de aposentado é: R$ 1212,00");
        } else {
            console.log("Seu salário de aposentado é: R$", retirement);
        } 
    }
} else {
        console.log("Você não pode se aposentar!");
}
