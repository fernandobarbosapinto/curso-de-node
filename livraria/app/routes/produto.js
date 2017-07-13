module.exports = function(app){
	app.get('/produtos', function(req, res){
		//console.log('Listando...');
		var mysql = require('mysql');
		var connection = mysql.createConnection({
			host : 'localhost',
			user : 'root',
			password : 'Mudar123',
			database : 'livraria_nodejs'
		});

		connection.query('select * from produtos', function(err, results){
			res.send(results)
		});

		connection.end();
		
	});
}