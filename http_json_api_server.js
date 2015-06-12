var http = require('http')
	port = process.argv[2]
	url = require('url')

server = http.createServer(function(request, response) {
	if(request.method == 'GET') {
		var parsedURL = url.parse(request.url,true)
		var reqObject;
		
		if(parsedURL.pathname == '/api/parsetime') {
			var date = new Date(parsedURL.query.iso)
			reqObject = {
				hour: date.getHours(),
				minute: date.getMinutes(),
				second: date.getSeconds()
			}
		}
		
		if(parsedURL.pathname == '/api/unixtime') {
			var date = new Date(parsedURL.query.iso)
			reqObject = {
				unixtime: date.getTime()
			}
		}
		response.writeHead(200, { 'Content-Type': 'application/json' })
		response.end(JSON.stringify(reqObject));	
	}	
});

server.listen(port);