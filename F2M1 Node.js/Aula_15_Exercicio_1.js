function baixarConteudoPromisse(nomeConteudo) {
    return new Promise((resolve, reject) => {
        console.log(`Iniciando o download de ${nomeConteudo}...`);

        //Simula um tempo de download (em Milissegundos)
        setTimeout(() => {
            const sucesso = true; //Simula se o Download foi bem-sucedido

            if(sucesso) {
                console.log(`${nomeConteudo} foi baixado com sucesso.`);
                resolve(nomeConteudo); //Resolvendo a promise com sucesso.
            } else {
                const erro = 'Erro ao baixar o conteúdo';
                console.error(erro);
                reject(erro); //Rejeitando a Promise em caso de erro
            }
        }, 2000); //Simula 2 segundos de Download
    });
}

// Vamos usar a função baixarConteudoPromisse com Promises
baixarConteudoPromisse('Documento.pdf')
    .then((nomeConteudo) => {
        console.log(`Download de ${nomeConteudo} concluído com sucesso!`);
    })
    .catch((erro) => {
        console.log.error(`Erro durante o download: ${erro}`);
    });

// Podemos encadear múltiplos downloads usando .then
baixarConteudoPromisse('Imagem.jpg')
.then ((nomeConteudo) => {
    console.log(`Downoload de ${nomeConteudo} concluído com sucesso!`);
    return baixarConteudoPromisse(`Video.mp4`);
})
.then((nomeConteudo) => {
    console.log(`Download de ${nomeConteudo} concluído com sucesso!`);
})
.catch((erro) => {
    console.error(`Erro durante o download: ${erro}`);
});