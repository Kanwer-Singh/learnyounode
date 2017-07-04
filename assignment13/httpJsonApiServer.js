var http =  require('http');
var process =  require('process');
var fs = require('fs');
var url = require('url');
http.createServer(function(req, res){
	var urlObj = url.parse(req.url, true);
	res.writeHead(200, {'Content-Type': 'application/json'});  
	var date = new Date(urlObj.query.iso);
	if('/api/parsetime' === urlObj.pathname) {
		res.write(JSON.stringify({
			'hour':date.getHours(),
			'minute':date.getMinutes(),
			'second':date.getSeconds()
		}));
		res.end();
		}
	else if('/api/unixtime' === urlObj.pathname) {
		res.write(JSON.stringify({	
			'unixtime':date.getTime()
		}));
		res.end();
		}
}).listen(process.argv[2]);