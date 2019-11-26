var express = require('express');
var fs = require('fs');

var app = express();
var port = 3000;

app.listen(port, function(){
    console.log('Server Start, Port : ' + port);
});

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    fs.readFile('index.html', function(error, data){
        if(error){
            console.log(error);
        }else{
            res.writeHead(200, {'Content-Type' : 'text/html'});
            res.end(data);
        }
    });
});