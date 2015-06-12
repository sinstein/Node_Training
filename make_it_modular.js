var readModule = require("./readModule.js");

var rootDir = process.argv[2]
	extName = process.argv[3]

readModule(rootDir,extName,function callback(err, fList) {
	if(!err)
		for(var i = 0; i < fList.length; i++)
			console.log(fList[i]);
});


