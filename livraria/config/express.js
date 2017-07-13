var app = require('express')();
app.set('view engine','ejs');
app.set('views','./app/views');

module.exports = function(){
	//console.log('modulo esta sendo carregado');
	return app;
}