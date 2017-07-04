var http = require('http');
var process = require('process');
http.get(process.argv[2], function(res) {
	res.setEncoding("UTF-8");
	res.on("data", function(chunk) {
		console.log(chunk);
	});
}).on('error', function(err) {
	console.log("Error :" + e.message)
});