// Selecionar todos elementos da classe 'produto_preco'
var elementos = document.getElementsByClassName('produto_preco');
// Implementar um comando de repetição para analisar o valor 'innerText' de cada um dos elementos e somá-los (lembre-se de converter o valor para float)
var precoTotal = 0;

for (let e of elementos) {
    precoTotal += parseFloat(e.innerText)
}
// Escrever no conteúdo da página o valor da soma 
document.write("Total: R$ " + precoTotal);