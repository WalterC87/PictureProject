var express = require('express'),
	http	= require('http'),
	app		= express(),
	server	= http.createServer(app);

app.configure(function(){
	app.set('views', __dirname + '/app/views');
	app.set('view engine', 'jade');
	app.use(express.static('./public'));
	app.use(express.logger());
	app.use(express.cookieParser());
	app.use(express.urlencoded());
	app.use(express.json());
	app.use(express.session({ secret: 'SECRET' }));
	app.use(express.session({ secret: 'SECRET' }));
});

var port = process.env.PORT || 3002;

var routerController = require('./app/router');
var apiController = require('./app/controllers/api');
routerController(app);
apiController(app);

server.listen(port, function(){
	console.log("Listening on " + port);
});
console.log('app running');
