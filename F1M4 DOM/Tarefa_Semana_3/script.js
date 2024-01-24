(function() {
  'use strict'

  var forms = document.querySelectorAll('.needs-validation')

  Array.prototype.slice.call(forms)
    .forEach(function(form) {
      form.addEventListener('submit', function(event) {
        if (!form.checkValidity()) {
          form.classList.add('was-validated')
        } else {
          inserir()
          form.classList.remove('was-validated')
          form.reset()
        }
        event.preventDefault()
        event.stopPropagation()
      }, false)
    })
})()


function getLocalStorage() {
  return JSON.parse(localStorage.getItem('bd_monitores')) ?? [];
}

function setLocalStorage(bd_monitores) {
  localStorage.setItem('bd_monitores', JSON.stringify(bd_monitores));
}

function limparTabela() {
  var elemento = document.querySelector("#tabela>tbody");
  while (elemento.firstChild) {
    elemento.removeChild(elemento.firstChild);
  }
}

function atualizarTabela() { // Adaptação da função atualizarTabela (5 pontos)
  limparTabela();
  const bd_monitores = getLocalStorage();
  let index = 0;
  for (monitor of bd_monitores) {
    const novaLinha = document.createElement('tr');
    novaLinha.innerHTML = `
        <th scope="row">${index}</th>
        <td>${monitor.nome}</td>
        <td>${monitor.marca}</td>
        <td>${monitor.taxaAtualizacao}
        <td>${monitor.polegadas}</td>
        <td>${monitor.proporcao}</td>
        <td>${monitor.resolution}
        <td>
            <button type="button" class="btn btn-danger" id="${index}" onclick="excluir(${index})">Excluir</button>
        </td>
    `
    document.querySelector('#tabela>tbody').appendChild(novaLinha)
    index++;
  }
}

function inserir() { // Adaptação da função inserir (10 pontos)
  const monitor = {
    nome: document.getElementById('nome').value,
    marca: document.getElementById('marca').value,
    taxaAtualizacao: document.getElementById('taxaAtualizacao').value,
    polegadas: document.getElementById('polegadas').value,
    proporcao: document.getElementById('proporcao').value,
    resolution: document.getElementById('resolution').value
  }
  const bd_monitores = getLocalStorage();
  bd_monitores.push(monitor);
  setLocalStorage(bd_monitores);
  atualizarTabela();
}

function excluir(index) { // Adaptação da função excluir (5 pontos)
  const bd_monitores = getLocalStorage();
  bd_monitores.splice(index, 1);
  setLocalStorage(bd_monitores);
  atualizarTabela();
}

function validarMonitor() { // Adaptação da função validar (10 pontos)
  const bd_monitores = getLocalStorage();
  for (monitor of bd_monitores) {
    if (nome.value == monitor.nome && marca.value == monitor.marca && polegadas.value == monitor.polegadas && proporcao.value == monitor.proporcao && resolution.value == monitor.resolution) {
      nome.setCustomValidity('Esse monitor já existe no cadastro. Informe um novo.');
      feedback.innerText = 'Esse monitor já existe no cadastro. Informe um novo';
      marca.setCustomValidity('Esse monitor já existe no cadastro. Informe um novo.');
      feedbackMarca.innerText = 'Esse monitor já existe no cadastro. Informe um novo.';
      polegadas.setCustomValidity('Esse monitor já existe no cadastro. Informe um novo.');
      feedbackPolegadas.innerText = 'Esse monitor já existe no cadastro. Informe um novo.';
      proporcao.setAttribute('Esse monitor já existe no cadastro. Informe um novo.');
      feedbackProporcao.innerText = 'Esse monitor já existe no cadastro. Informe um novo.';
      resolution.setCustomValidity('Esse monitor já existe no cadastro. Informe um novo.');
      feedbackResolution.innerText = 'Esse monitor já existe no cadastro. Informe um novo.';
      celular.setCustomValidity("Este número de celular já existe!");
      feedbackCelular.innerText = "Este número de celular já existe!";
      return false;
    } else {
      nome.setCustomValidity('');
      feedback.innerText = 'Informe o nome do monitor.';
      marca.setCustomValidity('');
      feedbackMarca.innerText = 'Selecione a marca do monitor...';
      polegadas.setCustomValidity('');
      feedbackPolegadas.innerText = 'Selecione a quantidade de polegadas...';
      proporcao.setAttribute('');
      feedbackProporcao.innerText = 'Informe a proporção da tela...';
      resolution.setCustomValidity('');
      feedbackResolution.innerText = 'Informe a resolução da tela...';
    }
  }
  return true;
}

atualizarTabela();
// Seleção dos elementos e adição do listener para validação customizada (5 pontos)
const nome = document.getElementById('nome');
const feedbackNome = document.getElementById('feedbackNome');
nome.addEventListener('input', validarMonitor);

const marca = document.getElementById('marca');
const feedbackMarca = document.getElementById('feedbackMarca');

const taxaAtualizacao = document.getElementById('taxaAtualizacao');
const feedbackTaxaAtt = document.getElementById('feedbackTaxaAtt');

const polegadas = document.getElementById('polegadas');
const feedbackPolegadas = document.getElementById('feedbakcPolegadas');

const proporcao = document.getElementById('proporcao');
const feedbackProporcao = document.getElementById('feedbackproporcao');

const resolution = document.getElementById('resolution');
const feedbackResolution = document.getElementById('feedbackResolution');