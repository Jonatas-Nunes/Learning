let btn1 = document.querySelector('#btn1');

btn1.addEventListener('click', mensagem1);
btn1.addEventListener('click', mensagem2);
btn1.addEventListener('click', mensagem3);

function mensagem1(e) {
    alert("Mensagem 1: " + e.target.id);
}

function mensagem2() {
    alert("Mensagem 2: " + btn1.innerText);
}

function mensagem3() { 
    alert("Mensagem 3: " + btn1.type);
}