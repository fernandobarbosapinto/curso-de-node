module.exports = function(app){
	app.get('/produtos', function(req, res){
		console.log('Listando...');
		res.render('produtos/lista');
	});
}