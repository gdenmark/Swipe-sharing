var app = require('express')()
var http = require('http').Server(app)
var io = require('socket.io')(http)
var port = process.env.PORT || 6969
const fbid = 913782388761480

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html')
});

io.on('connection', function(socket){
	
});

http.listen(port, function(){
  console.log('listening on *:' + port)
});
