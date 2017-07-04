var http = require("http");
var process = require("process");
var document = [];
var counter = 0;

function outputData() {
	for(var i = 0; i < 3; i++) {
		console.log(document[i]);
	}
}

function httpGet(index) {
	var data = '';
	http.get(process.argv[2 + index], function(res){
	res.setEncoding("UTF-8");
	res.on("data", function(chunk) {
		data += chunk;
	});
	res.on("end", function() {
		document[index] = data;
		counter += 1;
		if(counter == 3) {
		outputData();
	};
	});
}).on("error", function(err) {
	console.log("Error: "+ err);
});
};
for(var i = 0 ; i < 3; i ++) {
	httpGet(i);
};
