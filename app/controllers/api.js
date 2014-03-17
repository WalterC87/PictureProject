var mysql = require('mysql');
var connection = mysql.createPool({
					host	 : 'localhost',
					user	 : 'root',
					password : 'root',
					database : 'printoo'
				});

var apiController = function(app){
	console.log('ApiController load');

	app.get('/cities', function (req,res){
		res.setHeader('Content-Type', 'application/json');
		connection.getConnection(function (err,conn){
			if(err){
				console.log(err);
				res.statusCode = 503;
				res.send({
					result: 'error',
					err: err.code
				});
			}else{
				conn.query('SELECT * FROM ciudad WHERE estado = 1 ORDER BY descripcion', function (err,rows,fields){
					if(err){
						console.log(err);
						res.statusCode = 500;
						res.send({
							result : 'error',
							err : err.code
						});
					}else{
						res.send({
							result : 'success',
							err    : '',
							//fields : fields,
							json   : rows,
							length : rows.length,
						})
					}
					conn.release();
				});
			}
		});
	});

	app.post('/registro/empresa', function (req,res){
		console.log('POST Empresa');
		tipoUsuario = 1;
		marca = req.body.txtNombre;
		contacto = req.body.txtContacto;
		email = req.body.txtEmail;
		telefono = req.body.txtTelefono;
		password = req.body.txtPassword;
		estado = 1;

		connection.getConnection(function (err,conn){
			if(err){
				console.log(err);
				res.statusCode = 500;
				res.send({
					result : 'error',
					err    : err.code
				});
			}else{
				conn.query("INSERT INTO usuario (idUsuario, idTipoUsuario,nombre,contacto,email,telefono,password,fecha,estado) VALUES(NULL,"+tipoUsuario+",'"+marca+"','"+contacto+"','"+email+"','"+telefono+"','"+password+"',NOW(),"+estado+")", function (err,rows,field){
					if(err){
						res.send({
							result : 'error',
							err    : err.code
						});
					}else{
						console.log('success');
						res.redirect('/success');
					}
					conn.release();
				});
			}
		});
	});

	app.post('/registro/usuario', function (req,res){
		console.log('POST Usuarios');
		debugger;
		tipoUsuario = 2;
		nombre = req.body.txtNombre;
		email = req.body.txtEmail;
		password = req.body.txtPassword;
		sexo = req.body.cmbSexo;
		ciudad = req.body.cmbCiudad;
		nacimiento = req.body.txtAnio + '-' + req.body.cmbMes + '-' + req.body.cmbDia;
		estado = 1;

		connection.getConnection(function (err,conn){
			if(err){
				console.log(err);
				res.statusCode = 500;
				res.send({
					result : 'error',
					err    : err.code
				});
			}else{
				conn.query("INSERT INTO usuario (idUsuario, idTipoUsuario,nombre,email,sexo,fechaNacimiento,idCiudad,password,fecha,estado) VALUES(NULL,"+tipoUsuario+",'"+nombre+"','"+email+"','"+sexo+"','"+nacimiento+"',"+ciudad+",'"+password+"',NOW(),"+estado+")", function (err,rows,field){
					if(err){
						res.send({
							result : 'error',
							err    : err.code
						});
					}else{
						console.log('success');
						res.redirect('/success');
					}
					conn.release();
				});
			}
		});
	});

};

module.exports = apiController;
