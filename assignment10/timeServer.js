var net = require('net');
function padding(num) {
	return (num <= 9) ? ('0' + num) : num;
};
function formatDate(date) {
	return date.getFullYear()+"-"+
	padding(date.getMonth() + 1)+"-"+    
    padding(date.getDate())+" "+        
    padding(date.getHours())+":"+  
    padding(date.getMinutes()); 
};
var server = net.createServer(function (socket) {
	var date = new Date();
	socket.end(formatDate(date) + '\n');
});

server.listen(Number(process.argv[2]));