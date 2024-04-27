const http = require('http');
const url = require('url');
const porta = 443;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(req.url);

  const parametro = url.parse(req.url, true).query;
  res.write('<br/>' + parametro.nome);
  res.write('<br/>' + parametro.sobrenome);
  res.write('<br/>' + parametro.cidade)
  res.end();
});

server.listen(porta, () => { 
    console.log('Servidor rodando');
    const { exec } = require('child_process');
    exec('start http://localhost:' + porta);
});