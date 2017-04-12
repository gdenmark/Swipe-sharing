var name = ''
var userID = ''
var accessToken = ''
var socket = io()

$(document).ready(function() {
  $.ajaxSetup({ cache: true })
  $.getScript('//connect.facebook.net/en_US/sdk.js', function(){
    FB.init({
      appId: '913782388761480',
      version: 'v2.7' // or v2.1, v2.2, v2.3, ...
    });
    $('#loginbutton,#feedbutton').removeAttr('disabled')
    FB.getLoginStatus(updateStatusCallback)
	  console.log(FB)
  })

})

$(function(){
	view('login')
})

function view(v){
	$('.container').hide()
	$('#'+v+'-view').show()
}

function updateStatusCallback(res){
	console.log(res)
	accessToken = res.authResponse.accessToken
	userID = res.authResponse.userID
	FB.api('/me', function(res) {
		console.log(res)
		name = res.name
	})
	if(userID != '' && accessToken != '' && name != ''){
		socket.emit('user info', {userID: userID, name: name})
		view('main')
	}
}
