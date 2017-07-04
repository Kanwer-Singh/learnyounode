var fs = require('fs');
 fs.readFile(process.argv[2], "UTF-8", function(err, contents) {		
	if(err) {
		console.log(err);
	}
	else {
		console.log(contents.split("\n").length - 1);
	}
});
