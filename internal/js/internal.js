;(function (window, console) {
	'use strict';

	console.log('internal');

	window.onmessage = function (event) {
		console.log('event.data:', event.data);
		var response = JSON.parse(event.data);
		var responseOrigin = response.origin;
		var message = {
			"message": "message from internal.js",
			"token": response.token
		};
		window.parent.postMessage(JSON.stringify(message), responseOrigin);
	};
}(window, console));
