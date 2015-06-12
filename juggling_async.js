var http = require('http')
var url = process.argv.slice(2,5)
var strData = []
var count = 0

function sendRequest(url, index, callback) {
	http.get(url, function(response) {
		response.setEncoding('utf8');
		var str = ""

		response.on("data",function(data){
			str = str.concat(data);		
		});

		response.on('end', function(){
			count++
			strData[index] = str;
			callback()			
		});
	});
}

function printData() {
	if(count == 3) {
		for(var i = 0; i < 3; i++) {
			console.log(strData[i]);
		}
	}
}

for(var i = 0; i < 3; i++) {
	sendRequest(url[i], i, printData);
}