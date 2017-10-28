var field = document.getElementById("field"),
	chat = document.getElementById("chat");

var ws = new WebSocket("ws://localhost:591/");

ws.onmessage = function(message) {
	console.log("NEW MESSAGE!");
	chat.value = message.data + "\n" + chat.value;
};

ws.onopen = function() {
	field.addEventListener("keydown", function(event) {
		if(event.which == 13){
			ws.send(field.value);
			field.value = "";
		}
	});
};

