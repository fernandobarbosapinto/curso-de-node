var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
module.exports = function(){
	//console.log('modulo esta sendo carregado');
	var app = express();

	app.use(express.static('./app/public'));
	app.set('view engine','ejs');
	app.set('views','./app/views');

	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	app.use(expressValidator());

	load('routes',{cwd:'app'})
		.then('infra')
		.into(app);

	app.use(function(req, res, next){
		res.status(404).render('erros/404');
	});

	app.use(function(error, req, res, next){
		if(!process.env.NODE_ENV || process.env.NODE_ENV === 'dev'){
			res.status(500).render('erros/500');
			return;
		}
		next(error);
	});

	//Lembre que a ordem dos Middlewares importa para que quando um seja carregado, 
	//o express já tenha carregado todas as outras dependências das quais ele necessita.
	
	return app;
}