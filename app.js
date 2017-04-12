var Datastore = require('nedb')
var db = new Datastore({filename: 'data.db', autoload: true})
var fs = require('fs')
var app = require('express')()
var http = require('http').Server(app)
var io = require('socket.io')(http)
var port = process.env.PORT || 6969
const fbid = 913782388761480

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html')
})

app.get('/*', function(req, res){
	res.sendFile(__dirname + req.url)
})

http.listen(port, function(){
  console.log('listening on *:' + port)
})

io.on('connection', function(socket){
	console.log(socket.id)

	socket.on('user info', function(ui){
		let dbres = db.findOne({userID: ui.userID})
		console.log(dbres)
		db.insert(ui)
		dbres = db.findOne({userID: ui.userID})
		console.log(dbres)
	})
})


