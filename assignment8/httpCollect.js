var http = require("http");
var process = require("process");
var document = '';
http.get(process.argv[2], function(res){
	res.setEncoding("UTF-8");
	res.on("data", function(chunk) {
		document += chunk;
	});
	res.on("end", function() {
		console.log(document.length);
		console.log(document);
	});

}).on("error", function(err) {
	console.log("Error: "+ err);
});