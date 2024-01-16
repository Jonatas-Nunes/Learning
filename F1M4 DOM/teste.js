var btn = document.getElementById('btnCalcular');
var alturaInput = document.getElementById('txtAltura');
var pesoInput = document.getElementById('txtPeso');
var valor_imc = document.getElementById('divIMC');
btn.addEventListener('click', calcular_imc);

function calcular_imc() {
    var altura = parseFloat(alturaInput.value);
    var peso = parseFloat(pesoInput.value);
    
    if (!isNaN(altura) && !isNaN(peso) && altura > 0 && peso > 0) {
        let calc =  peso / ( altura * altura )
        valor_imc.innerHTML = `O IMC é: ${calc.toFixed(2)}`
    } else {
        valor_imc.innerHTML = 'Por favor, insira um valor válido para a altura e peso.';
    }
}