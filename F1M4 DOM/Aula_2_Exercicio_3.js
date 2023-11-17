btn = document.getElementById('btnAdicionar');
btn.addEventListener('click', addLine);

function addLine() {
    const number = parseInt(Math.random() * (100) + 1);
    const newLine = document.createElement('tr');
    newLine.innerHTML = '<td>'+ number + '</td>';
    document.querySelector('#tabela1').appendChild(newLine);
}