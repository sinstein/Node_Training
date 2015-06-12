var fs = require('fs');
fs.readFile(process.argv[2],'utf8',callback);

function callback(err, buff) {
	if(!err)
		console.log(buff.split("\n").length - 1);
}
