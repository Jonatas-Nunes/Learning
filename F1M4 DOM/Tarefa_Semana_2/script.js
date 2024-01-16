var cachorros = [{ "nome": "Thor", "imagem": "dog1" }, { "nome": "Zeca", "imagem": "dog2" }, { "nome": "Zeus", "imagem": "dog3" }, { "nome": "Pingo", "imagem": "dog4" }];

var gatos = [{ "nome": "Dunga", "imagem": "cat1" }, { "nome": "Mika", "imagem": "cat2" }, { "nome": "Conan", "imagem": "cat3" }, { "nome": "Messi", "imagem": "cat4" }];

// Selecionar elemento 'select_animais' ( 1 ponto)
var selecionar_animais = document.getElementById('select_animais');
// Selecionar elemento 'container' ( 1 ponto)
var container = document.querySelector('#container');
// Selecionar elemento 'nome' ( 1 ponto)
var nome = document.getElementById('nome');
// Adicionar Listener 'input' ao elemento 'select_animais' (1 ponto)
selecionar_animais.addEventListener('input', listarAnimais);
// Adicionar Listener 'mouseover' ao elemento 'container' (1 ponto)
container.addEventListener('mouseover', mostrarNome);
// Adicionar Listener 'mouseout' ao elemento 'container' (1 ponto)
container.addEventListener('mouseout', limparNome);

function listarAnimais() { // Implementação da função (10 pontos)
  limparDivContainer();

  let animais; //let slct_animais = 0;
  if (selecionar_animais.value === "dog") {
    animais = cachorros;
  } else {
    animais = gatos;
  }

  for (let animal of animais) {
    let img = document.createElement('img');
    let caminho = `./img/${animal.imagem}.jpg`;
    img.setAttribute('src', caminho);
    img.setAttribute('alt', animal.nome);
    container.appendChild(img);
  }
}

function mostrarNome(e) { // Implementação da função (4 pontos)
  // Implementar...
  nome.innerText = `Nome do animal: ${e.target.alt}`;
}

function limparNome() {
  nome.innerText = "";
}

// Função para limpar as imagens antigas, antes de inserir novas imagens
function limparDivContainer() {
  var elemento = document.querySelector("#container");
  while (elemento.firstChild) {
    elemento.removeChild(elemento.firstChild);
  }
}