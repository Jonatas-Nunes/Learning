var elementos = document.getElementsByTagName("*");
document.write("Quantidade de elementos: " +  elementos.length);

var todosElementos = "";

for (i = 0; i < elementos.length; i++) {
    const elemento = elementos[i];
    todosElementos += "<br>" + elemento.tagName;    
}

document.write(todosElementos);