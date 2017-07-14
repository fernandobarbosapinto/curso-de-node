var mysql = require('mysql');
function createDBConnection(){
	return mysql.createConnection({
		host : 'localhost',
		user : 'root',
		password : 'Mudar123',
		database : 'livraria_nodejs'
	});
}
//Wrapper - Criamos aqui uma função que embrulha a outra função
module.exports = function(){
	return createDBConnection;
}
