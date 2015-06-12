var http = require('http')
var url = process.argv[2]
var strData = ""

http.get(url, function (response) {
	response.setEncoding('utf8');
	
	response.on("data",function(data){
		strData = strData.concat(data);		
	});
	
	response.on("end",function() {
		console.log(strData.length);
		console.log(strData);
	});
});