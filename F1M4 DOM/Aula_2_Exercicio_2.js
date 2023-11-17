btn = document.getElementById("btnCalcular");
btn.addEventListener('click', calcular);

function calcular() {
    var altura = parseFloat(document.getElementById('txtAltura').value);
    var peso =  parseFloat(document.getElementById('txtPeso'.value));;
    var imc = peso / (altura**2);

    var d = document.getElementById('divIMC')
    d.innerHTML = "O IMC é: " + imc;
    // d.innerHTML = "O IMC é: <strong>${imc.toFixed(2)}</strong>;"
}