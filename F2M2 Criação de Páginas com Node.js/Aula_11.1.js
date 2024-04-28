const http = require('http');
const porta = 443;
const fs = require('fs');
const formidable = require('formidable');

const servidor = http.createServer((req, res) => {

  if (req.url != '/enviodearquivo') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<form action="enviodearquivo" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>')
    res.write('<input type="submit" value="enviar">');
    res.write('</form>');
    return res.end();
  } else {
    const form = new formidable.IncomingForm();
    form.parse(req, (erro, campos, arquivos) => {
      const urlAntiga = arquivos.filetoupload[0].filepath;
      const urlNova = './enviodearquivo/' + arquivos.filetoupload[0].originalFilename;
      var rawData = fs.readFileSync(urlAntiga);
      fs.writeFile(urlNova, rawData, (err) => {
        if (err) console.log(err);
        res.write('O arquivo foi enviado com sucesso!');
        res.end();
      })
    });
  }
});

servidor.listen(porta, () => {
    console.log('Servidor rodando.');
    const url = `http://localhost:${porta}`;
    import('open').then(open => open.default(url))
});