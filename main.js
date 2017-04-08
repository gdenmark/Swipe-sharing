var socket = io();

$(document).ready(function() {
  $.ajaxSetup({ cache: true });
  $.getScript('//connect.facebook.net/en_US/sdk.js', function(){
    FB.init({
      appId: '913782388761480',
      version: 'v2.7' // or v2.1, v2.2, v2.3, ...
    });     
    $('#loginbutton,#feedbutton').removeAttr('disabled');
    FB.getLoginStatus(updateStatusCallback);
	  console.log(FB);
  });

});

$(function(){
	view('login');
})

function view(v){
	$('.container').hide();
	$('#'+v+'-view').show();
}

function updateStatusCallback(){
	
}
