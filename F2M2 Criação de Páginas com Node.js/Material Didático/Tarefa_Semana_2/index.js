// <!-- PROFESSOR, PESQUISEI O MÁXIMO QUE PODIA MAS NÃO CONSEGUI FAZER AS IMAGENS REDERIZAR COM O SERVIDOR RODANDO. PORÉM SE ABRIR COM O LIVESERVER FUNCIONA AS IMAGENS NORMALMENTE. MOTIVO: NÃO SEI! -->

const http = require('http');
const fs = require('fs');
const porta = 443;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  if (req.url === '/') {
    fs.readFile(__dirname + '/home.html', (err, data) => {
      if (err) {
        res.writeHead(404);
        res.write('<h1>Erro ao ler o arquivo</h1>');
      } else {
        res.write(data)
      }
      res.end();
    });
  } else if (req.url === '/p1') {
    fs.readFile(__dirname + '/p1.html', (err, data) => {
      if (err) {
        res.writeHead(404);
        res.write('<h1>Erro ao ler o arquivo</h1>');
      } else {
        res.write(data);
      }
      res.end();
    });
  } else if (req.url === '/p2') {
    fs.readFile(__dirname + '/p2.html', (err, data) => {
      if (err) {
        res.writeHead(404);
        res.write('<h1>Erro ao ler o arquivo</h1>');
      } else {
        res.write(data);
      }
      res.end();
    });
  } else if (req.url === '/p3') {
    fs.readFile(__dirname + '/p3.html', (err, data) => {
      if (err) {
        res.writeHead(404);
        res.write('<h1>Erro ao ler o arquivo</h1>')
      } else {
        res.write(data);
      }
      res.end();
    });
  } else {
    res.writeHead(404);
    res.write('<h1>Erro ao ler o arquivo</h1>');
    res.end();
  }
});



server.listen(porta, () => {
  console.log('Servidor rodando');
  const url = `http://localhost:${porta}`;
  import('open').then(open => open.default(url));
});