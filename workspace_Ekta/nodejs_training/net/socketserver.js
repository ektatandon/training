// server socket listening to events data,end and error
var net = require('net');
var server = net.createServer(function(connectionListener) {
	// get connection count

	server.getConnections(function(err,count) {

		if (err) {
			console.log('error getting connections');
		} else {
			// send out info to client
			connectionListener.write('connections to server: ' + count + '\r\n');
		}
		
	});

	// Disconnect logic
	connectionListener.on('end',function() {
		
			console.log('client disconnected');
	
	});

	connectionListener.write('hello socket from server\r\n');

	connectionListener.on('data', function(data) {
		console.log('message from you from client: ' + data);
	});

	// Handle connection errors
	connectionListener.on('error', function(err) {
		console.log('server error:' + err);
	});

});

server.listen(8181,function() {
	console.log('socket server is running on port 8181...');
});