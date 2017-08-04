var express = require('../config/express')();
var request = require('supertest')(express);

describe('#ProdutosController', function(){

	beforeEach(function(done){
		var conn = express.infra.connectionFactory();
		conn.query('delete from produtos', function(ex, result){
			if(!ex){
				done();
			}
		});
	});

	it('#listagem de produtos json', function(done){
		request.get('/produtos')
			.set('Accept','application/json')
			.expect('Content-Type',/json/)
			.expect(200, done);
	});

	//TESTE DE CADASTRO VÁLIDO E INVÁLIDO
	it('#Cadastro de novo produto com dados invalidos', function(done){
		request.post('/produtos')
			.send({titulo: "", descricao: "novo livro"})
			.expect(400, done);
	});

	it('Cadastro de novo produto com dados validos', function(done){
		request.post('/produtos')
			.send({titulo: "AngularJS 2.44v", descricao: "Novo Livro de Angular", preco: "33.99"})
			.expect(302, done);
	});
});