var fs = require('fs')
	path = require('path')

module.exports = function(rootDir, extName, callback) {
	fs.readdir(rootDir,function(err, list) {
		if(err)
			callback(err);
		else {
			var filteredList = [];
			for(var i = 0; i < list.length; i++) {
				if(path.extname(list[i]) == "." + extName)
					filteredList.push(list[i]);
			}
			callback(null, filteredList);
		}
	})
}