var elements = document.getElementsByTagName('*');
document.write("Quantidade de elementos: " + elements.length);

var all_elements = "";

for (let e of elements) { //A cada iteração do for, ele pega uma posição do array elements e põe na variável e
    all_elements = all_elements + "<br>" + e.tagName; 
}
document.write(all_elements);