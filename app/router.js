var CC = require('./controllers/city_list');
var MC = require('./controllers/month_list');
var DC = require('./controllers/days_list');

var routerController = function(app){
	console.log('routerController is load');

	app.get('/', function (req,res){
		res.render('index2');
	})

	app.get('/usuario', function (req,res){
		res.render('usuario',{
			cities : CC,
			months : MC,
			days : DC
		});
	})

	app.get('/success', function (req,res){
		res.render('success',{message : 'Haz sido registrado en la Nueva Era de la Fotografia...'});
	})

	app.get('/empresa', function (req,res){
		res.render('empresa');
	})
}

module.exports = routerController;