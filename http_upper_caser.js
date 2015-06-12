var http = require('http')
	port = process.argv[2]
	stream = require('stream')

server = http.createServer(function(request, response) {
	if(request.method == 'POST') {
		var body = ""
		request.on("data", function(data) {
			body += data;
		});

		request.on("end", function() {
			body = body.toUpperCase()
			var s = new stream.Readable();
			s._read = function noop() {};
			s.push(body);
			s.push(null);
			s.pipe(response);
		});
	}
});

server.listen(port);