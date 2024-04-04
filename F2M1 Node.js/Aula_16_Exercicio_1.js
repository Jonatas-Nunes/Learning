function baixarConteudoPromise(nomeConteudo) {
    return new Promise((resolve, reject) => {
        console.log(`Iniciando o download de ${nomeConteudo}...;`);
        
        //Simula um tempo de download (em milissegundos)
        setTimeout(() => {
            const sucesso = true; // Simula se o downnload foi bem-sucedido

            if (sucesso) {
                console.log(`${nomeConteudo} foi baixado com sucesso.`);
                resolve(nomeConteudo); //Resolvendo a Promise com sucesso
            } else {
                const erro = `Erro ao baixar o conteúdo`; 
                console.error(erro);
                reject(erro); //Rejeitando a Promise em caso de erro
            }
        }, 2000); //Simua 2 segundo de download
    });
}

async function baixarConteudoAsyncAwait () {
    try {
        const documento = await baixarConteudoPromise('Documento.pdf');
        console.log(`Download de ${documento} concluído com sucesso!`);

        const imagem = await baixarConteudoPromise('Imagem.jpg');
        console.log(`Download de ${imagem} concluido com sucesso!`);

        const video = await baixarConteudoPromise('Video.mp4');
        console.log(`Download de ${video} concluído com sucesso`);
    } catch (erro) {
        console.error(`Erro durante o download: ${erro}`);
    }
}

//Chama a função assíncrona
baixarConteudoAsyncAwait();