var routerController = function(app){
	console.log('routerController is load');

	app.get('/', function (req,res){
		res.render('index');
	})

	app.get('/registro/usuario', function (req,res){
		res.render('usuario');
	})

	app.get('/registro/empresa', function (req,res){
		res.render('empresa');
	})
}

module.exports = routerController;