var CC = require('./controllers/city_list');
var MC = require('./controllers/month_list');
var DC = require('./controllers/days_list');

var routerController = function(app){
	console.log('routerController is load');

	app.get('/', function (req,res){
		res.render('index');
	})

	app.get('/registro/usuario', function (req,res){
		res.render('usuario',{
			cities : CC,
			months : MC,
			days : DC
		});
	})

	app.get('/registro/empresa', function (req,res){
		res.render('empresa');
	})
}

module.exports = routerController;