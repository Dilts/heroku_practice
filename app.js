var express = require('express');

var app = express();

app.get('/', function(req, res) {
	res.send('<h1>Hi there</h1>');
});

var server = app.listen(process.env.PORT || 9624, function() {
	console.log('Express server listening on port ' + server.address().port);
});
