var wss = require("ws").Server;
var server = new wss({ port: 591 });
var clients = new Set();

server.on("connection", function(socket) {
	clients.add(socket);
	console.log("NEW CONNECTION!");
	socket.on("message", function(message) {
		console.log("NEW MESSAGE " + message);
		for(var i of clients) {
			i.send(message);
		}
	});

	socket.on("close", function() {
		clients.delete(socket);
	});
});

