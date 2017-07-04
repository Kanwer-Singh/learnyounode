var http = require('http');
var fs = require('fs');
var process = require('process');
var server = http.createServer(function(req, res) {
	var stream = fs.createReadStream(process.argv[3], "UTF-8");
	res.writeHead(200, {"Content-Type":"text/plain"});
	stream.pipe(res);
	}).listen(process.argv[2]);