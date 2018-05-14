var express = require('express');
var url  = require('url');
var http = require('http');

var app = express();

// GET json translate
app.get('/api/settings', function (req, res) {
	var url_parts = url.parse(req.url, true);
    var query = url_parts.query;
	res.writeHead(200, {"Content-Type": "application/json"});
	let json = JSON.stringify({...query});
	res.end(json);
});

//Upload empty
app.post('/api/upload', function (req, res) {
	res.send('File uploaded success');
});

app.listen(3000);
