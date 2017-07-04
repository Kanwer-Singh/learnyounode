var fs = require("fs");
var path = require("path");
var results = [];

function filterFiles(files, extension) {
	files.forEach(function(file) {
		if(path.extname(file) === "."+extension) {
			results.push(file);
		};
	});
	return results;
};
module.exports = function(dirName, extension, callback) {
	fs.readdir(dirName, function(err, files) {
	if(err) {
		callback(err);
	} else {
		var filteredFiles = filterFiles(files, extension);
		return callback(null, results);
	}
});
};