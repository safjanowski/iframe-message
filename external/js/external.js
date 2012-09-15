;(function (window, document, console) {
	'use strict';
	console.log('external');
	
	var internal = document.getElementById('internal');
	internal.onload = function () {
		var message = {
			"message": "message from external.js",
			"origin": "http://external.frame",
			"token": this.getAttribute('src')
		};
		internal.contentWindow.postMessage(JSON.stringify(message), 'http://internal.frame');
	};

	window.onmessage = function (event) {
		console.log('event.data:', event.data);
	};
}(window, document, console));
