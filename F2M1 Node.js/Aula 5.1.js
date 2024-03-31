/*
"Celsius → Fahrenheit

Multiplicamos a temperatura em ºC por 1,8 e somamos 32 ao resultado."

"Fahrenheit → Celsius

Subtraímos a temperatura e ºF por 32 e dividimos o resultado por 1,8."

*/

function celsiusToF(celsius) {
    return (celsius * 1.8) + 32;
}

function FtoCelsius(F) {
    return (F - 32) / 1.8; 
}

//exportando as funções para torna-las acessíveis a outros arquivos
module.exports = {
    celsiusToF, 
    FtoCelsius
}