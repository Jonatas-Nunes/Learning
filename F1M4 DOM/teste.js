const contato1 = [{ "nome": "Rafael", "telefone": "(11)11111-1111" }];
const contato2 = [{ "nome": "João", "telefone": "(22)22222-2222" }];

var mostrarContato = document.getElementById('mostrarcontato');
var container = document.getElementById('container');

mostrarContato.addEventListener('click', mostrar_contato);

function mostrar_contato() {
    for (let contato of [contato1[0], contato2[0]]) {
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        p1.innerHTML = 'Nome: ' + contato.nome;
        p2.innerHTML = `Tel: ${contato.telefone}`;
        container.appendChild(p1);
        container.appendChild(p2);
    }
}