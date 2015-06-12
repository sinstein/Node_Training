var fs = require('fs');
var buf = fs.readFileSync(process.argv[2]);
var contents = buf.toString();
var arr = [];
arr = arr.concat(contents.split("\n"));
console.log(arr.length - 1);