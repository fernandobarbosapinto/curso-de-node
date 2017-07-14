//var connectionFactory = require('../infra/connectionFactory');

module.exports = function(app){
	app.get('/produtos', function(req, res){
		//console.log('Listando...');

		var connection = app.infra.connectionFactory();
		
		connection.query('select * from produtos', function(err, results){
			//res.send(results)
			res.render('produtos/lista',{lista:results});
		});

		connection.end();
		
	});
}