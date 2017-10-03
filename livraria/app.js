var app = require('./config/express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('io', io);

//var rotasProdutos = require('./app/routes/produto')(app);

http.listen(3000, function(){
	console.log("Servidor rodando");
});