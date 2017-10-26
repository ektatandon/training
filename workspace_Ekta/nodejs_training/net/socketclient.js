var net = require('net');

// createConnection

var connection = net.createConnection(
	{ port: 8181, host:'BLRADIVEE63787'},
	function() {
		console.log('connection successful');
		connection.write('hello... I am ekta');
	});

// when data is recerived from server socket log it
connection.on('data', function(data) {
	console.log(data.toString());
	connection.write('How r u');
});

// in case not able to create socket to server, log error
connection.on('error', function(error) {
	console.log(error);
});

connection.on('end', function() {
	console.log('connection ended');
});