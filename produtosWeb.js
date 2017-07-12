var http = require('http');
var porta = 3000;
var ip = 'localhost';

var server = http.createServer(function(req, res){
	console.log('Recebendo request');
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end('<html><body><h1>Listando os produtos</h1></body></html>');
});

server.listen(porta, ip);

console.log('servidor rodando em http://' + ip + ':' + porta + '/');