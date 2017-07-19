//var connectionFactory = require('../infra/connectionFactory');

module.exports = function(app){
	var listarProdutos = function(req, res){
		//console.log('Listando...');

		var connection = app.infra.connectionFactory();
		var produtosDAO = new app.infra.ProdutosDAO(connection);
		
		produtosDAO.lista(function(err, results){
			//res.send(results)
			res.render('produtos/lista',{lista:results});
		});

		connection.end();
		
	}

	app.get('/produtos', listarProdutos);

	app.get('/produtos/cadastro', function(req, res){
		res.render('produtos/cadastro');
	});

	app.post('/produtos/salva', function(req, res){
		var produto = req.body;
		
		var connection = app.infra.connectionFactory();
		var produtosDAO = new app.infra.ProdutosDAO(connection);
		
		produtosDAO.salva(produto, function(erros, results){
			res.redirect('/produtos');
		});

		connection.end();
	});
}