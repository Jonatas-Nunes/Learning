const imgTecnologia = document.getElementById('imgTecnologia');
imgTecnologia.addEventListener('click', imgAllChange)

const btnHTML = document.getElementById('btnHTML');
btnHTML.addEventListener('click', imgHTMLChange);

const btnCSS = document.getElementById('btnCSS');
btnCSS.addEventListener('click', imgCSSChange);

const btnJS = document.getElementById('btnJS')
btnJS.addEventListener('click', imgJSChange);

function imgAllChange() {
    imgTecnologia.src = './Material Didático/img/todas.png'
}
function imgHTMLChange() {
    imgTecnologia.src = './Material Didático/img/html.png'
}

function imgCSSChange() {
    imgTecnologia.src = './Material Didático/img/css.png'
}

function imgJSChange() {
    imgTecnologia.src = './Material Didático/img/js.png'
}

