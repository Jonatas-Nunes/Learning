const http = require('http');
const url = require('url');
const porta = 443;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(req.url);
  res.end();
});

server.listen(porta, () => { 
    console.log('Servidor rodando');
    const url = `http://localhost:${porta}`;
    import('open').then(open => open.default(url));
});