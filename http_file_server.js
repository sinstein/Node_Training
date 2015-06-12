var fs = require('fs')
	http = require ('http')
	port = process.argv[2]
	location = process.argv[3]

server = http.createServer(function(request, response) {
	var readStream = fs.createReadStream(location);
	readStream.pipe(response)
});

server.listen(port);