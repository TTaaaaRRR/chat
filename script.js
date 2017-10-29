var field = document.getElementById("field"),
	chat = document.getElementById("chat");


var name = prompt('Ваше имя', "user");
var ws = new WebSocket("ws://80.211.135.128:591/");

ws.onmessage = function(message) {
	console.log("NEW MESSAGE!");
	chat.value = name + ": " + message.data + "\n" + chat.value;
};

ws.onopen = function() {
	field.addEventListener("keydown", function(event) {
		if(event.which == 13){
			ws.send(field.value);
			field.value = "";
		}
	});
};

