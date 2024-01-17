var adicionar = document.getElementById('btnAdicionar');
var tabela = document.getElementById('tabela1');

adicionar.addEventListener('click', adicionar_num);

function adicionar_num() {
    let number = parseFloat(Math.floor(Math.random() * 100 + 1));
    let td = document.createElement('td');
    let tr = document.createElement('tr');
    tr.setAttribute('id', 'doc');
    tabela.appendChild(tr);
    tr.appendChild(td)
    td.innerText = number;
}