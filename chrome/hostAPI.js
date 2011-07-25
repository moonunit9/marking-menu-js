/*	Marking Menu JS
 *  by Brenton Simpson
 *  bsimpson@appsforartists.com
 *	7/24/2011
 */

var self = this;

var hostAPI = {
	'getURL':			function(path) {
		return chrome.extension.getURL(path);
	},
	
	'loadVariable':		function(key, callback) {
		message = {
			'action':	'getFromLocalStorage',
			'key':		key,
		}
	
		var setLocalVariable = function(response) {
			self[response.key] = response.value;
			
			if (callback)
				callback();
		}
	
		this.sendRequest(message, setLocalVariable);
	},
	
	'storeVariable':	function(key, callback) {
		message = {
			'action':	'storeInLocalStorage',
			'key':		key,
			'value':	self[key],
		}

		this.sendRequest(message, callback);
	},
	
	'sendRequest':		function(message, callback) {
		callback = callback || function() {};
		
		chrome.extension.sendRequest(message, callback);
	}
}