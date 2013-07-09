var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

buf = new Buffer(4096);
content = fs.readFileSync('index.html', 'utf-8');
buf.write(content, 'utf-8');
//console.log(buf.toString('utf-8'));
app.get('/', function(request, response) {
   response.send(buf.toString('utf-8'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
//console.log(buf.toString('utf-8'));