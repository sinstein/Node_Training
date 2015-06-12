var net = require('net')
var port = process.argv[2]

server = net.createServer(callback)

function callback(socket) {
	var date = new Date();
	var year = date.getFullYear().toString()
		month = ("0" + (date.getMonth() + 1).toString()).slice(-2)
		day = ("0" + date.getDate().toString()).slice(-2)
		hours = ("0" + date.getHours().toString()).slice(-2)
		mins = ("0" + date.getMinutes().toString()).slice(-2)

	socket.end(year +"-"+ month +"-"+ day +" "+ hours +":"+ mins +"\n");
}

server.listen(port);