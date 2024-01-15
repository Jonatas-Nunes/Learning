a1 = document.getElementById('area1');
a1.addEventListener('mousedown', mDown);
a1.addEventListener('mouseup', mUp);
a1.classList.add('unselectable');

a2 = document.getElementById('area2');
a2.addEventListener('mouseover', mOver);
a2.addEventListener('mouseout', mOut);
a2.classList.add('unselectable');

function mDown() {
    let obj = document.getElementById('area1');
    obj.style.backgroundColor = "#1ec5e5";
    obj.innerHTML = "Solte-me!";
}

function mUp() {
    let obj = document.getElementById('area1');
    obj.style.backgroundColor = "#f04028";
    obj.innerHTML = "Clique em mim!";
}

function mOver() {
    let obj = document.getElementById('area2');
    obj.innerHTML = "Obrigado";
}

function mOut() {
    let obj = document.getElementById('area2');
    obj.innerHTML = "Passe o Mouse!"
}