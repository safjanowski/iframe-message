;(function (window, document, console) {
	'use strict';
	
	console.log('external');
	
	var internal = document.getElementById('internal');
	var targetOrigin = internal.src.match("https|http://([^/]+).*");
	
	internal.onload = function () {
		var message = {
			"message": "message from external.js",
			"origin": window.location.href,
			"token": this.getAttribute('src')
		};
		internal.contentWindow.postMessage(JSON.stringify(message), targetOrigin);
	};

	window.onmessage = function (event) {
		console.log('event.data:', event.data);
	};
}(window, document, console));
