
var http = require("http");

var fs = require("fs");

//This is the random port I have selected to be used by the web server
var port = 6100;

var server = http.createServer(function(request, response) {
fs.readFile("package.json", function(err, contents) {
response.writeHeader(200, {"Content-Type": "application/json",
"Access-Control-Allow-Origin": "*"});

response.write(contents);
response.end();
});
});
server.listen(port, function() {
console.log("Listening on " + port);
});

