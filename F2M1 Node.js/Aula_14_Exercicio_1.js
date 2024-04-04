function baixarConteudo(nomeConteudo, callback) {
    console.log(`Iniciando o download de ${nomeConteudo}...`);
    //Simula um tempo de download (em milisegundos)
    setTimeout (() => {
        console.log(`${nomeConteudo} foi baixado com sucesso/`);
        callback(null, nomeConteudo); //Indica que o download foi concluido com sucesso

    }, 2000);
}

//Vamos criar uma função callback simples que será chamada após o download
function callbackConcluirDownload (erro, nomeConteudo) {
    if (erro) {
        console.error(`Erro ao baixar ${nomeConteudo}: ${erro}`);
    } else {
        console.log(`Download de ${nomeConteudo} concluído com sucesso!`);
    }
}

// Agora, vamos usar a função baixarConteúdo com callbacks
baixarConteudo('Documento.pdf', callbackConcluirDownload);
baixarConteudo('Imagen.png', callbackConcluirDownload);
baixarConteudo('Video.mp4', callbackConcluirDownload);