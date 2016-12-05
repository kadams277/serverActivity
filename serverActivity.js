var http = require("http");

var PORT = 7000;

var PORT2 = 7500;

function handleRequest(request, response){
	response.end("You are cool! Path Hit: " + request.url);
};

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
	console.log("Server listening on; http://localhost:%s", PORT);
});

///////////////////////////////////////////////////////////////////

function handleRequest2(request, response){
	response.end("You are a dumb ass! Path Hit: " + request.url);
};

var server2 = http.createServer(handleRequest2);

server2.listen(PORT2, function(){
	console.log("Server listening on; http://localhost:%s", PORT2);
});


