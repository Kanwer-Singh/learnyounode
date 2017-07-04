var fs = require("fs");
var path = require("path");
var results = [];
fs.readdir(process.argv[2], function(err, files) {
	if(err) {
		console.log(err);
	} else {
		files.forEach(function(fileName){
			if(path.extname(fileName) == '.'+process.argv[3]) {
				console.log(fileName)+"\n";
			};
		});
	}
});