var process = require('process');
var processFile = require("./processFile.js");

var callback = function(err, results) {
  if (err) {
    console.log(error);
  } else {
      results.forEach(function(fileName) {
      console.log(fileName)+"\n";
    });
  };
};

processFile(process.argv[2], process.argv[3], callback);     