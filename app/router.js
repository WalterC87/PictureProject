var routerController = function(app){
	console.log('routerController is load');

	app.get('/', function (req,res){
		res.render('index');
	})
}

module.exports = routerController;