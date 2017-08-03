//var connectionFactory = require('../infra/connectionFactory');

module.exports = function(app){
	var listarProdutos = function(req, res){
		//console.log('Listando...');

		var connection = app.infra.connectionFactory();
		var produtosDAO = new app.infra.ProdutosDAO(connection);
		
		produtosDAO.lista(function(err, results){
			//res.send(results)
			res.format({
				html: function(){
					res.render('produtos/lista',{lista:results});
				},
				json: function(){
					res.json(results);
				}
			});
			
		});

		connection.end();
		
	}

	app.get('/produtos', listarProdutos);

	app.get('/produtos/cadastro', function(req, res){
		res.render('produtos/cadastro',{errosValidacao:{}});
	});

	app.post('/produtos', function(req, res){
		var produto = req.body;
		console.log(produto);

		var connection = app.infra.connectionFactory();
		var produtosDAO = new app.infra.ProdutosDAO(connection);
		
		//validação dos campos
		req.assert('titulo', 'Titulo deve ser preenchido').notEmpty();
        req.assert('preco','Preco deve ser um número').isFloat();

        var errors = req.validationErrors();
        console.log(errors);
        if(errors){
        	res.format({
			    html: function(){
			        res.status(400).render('produtos/cadastro',{errosValidacao:erros,produto:produto});
			    },
			    json: function(){
			        res.status(400).send(errors);
			    }
			});
            // res.render('produtos/cadastro',
            //     {errosValidacao:errors}
            //     );
            return;
        }



		produtosDAO.salva(produto, function(erros, results){
			//console.log(erros);
			res.redirect('/produtos');
			console.log(produto);
		});

		connection.end();
	});
}