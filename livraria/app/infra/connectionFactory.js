var mysql = require('mysql');

function createDBConnection(){
	if(!process.env.NODE_ENV || process.env.NODE_ENV === 'dev'){
		return mysql.createConnection({
			host : 'localhost',
			user : 'root',
			password : 'Mudar123',
			database : 'livraria_nodejs'
		});
	}

	if(process.env.NODE_ENV == 'test'){
		return mysql.createConnection({
			host : 'localhost',
			user : 'root',
			password : 'Mudar123',
			database : 'livraria_nodejs_test'
		});
	}
}

//Wrapper - Criamos aqui uma função que embrulha a outra função
module.exports = function(){
	return createDBConnection;
}
