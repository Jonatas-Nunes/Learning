var b2 = document.getElementById("btn2");
b2.onclick = function() {alert('Propriedades do manipulador de eventos'); };

var b3 = document.getElementById("btn3");
b3.addEventListener("click", function() { alert("addEventListener"); }, false);