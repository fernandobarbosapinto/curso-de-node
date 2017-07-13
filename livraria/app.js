var app = require('./config/express')();

var rotasProdutos = require('./app/routes/produto')(app);

app.listen(3000, function(){
	console.log("Servidor rodando");
});