const http = require('http');
const fs = require('fs');
const porta = 443;
const servidor = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  if (req.url == '/') {
    fs.readFile(__dirname + 'indexo.html', (err,data) => {
        if (err) {
            res.writeHead(404);
            res.write('Erro ao ler o arquivo');
            res.end();
        } else {
            res.write(data);
            res.end();
        }
    })
  }
});

servidor.listen(porta, () => {
  console.log('Servidor rodando');
  const url = `http://localhost:${porta}`;
  import('open').then(open => open.default(url));
});