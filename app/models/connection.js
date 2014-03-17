var mysql = require('mysql');

mysql.createPool({
	host	 : 'localhost',
	user	 : 'root',
	password : 'root',
	database : 'printoo'
});

module.exports = mysql;