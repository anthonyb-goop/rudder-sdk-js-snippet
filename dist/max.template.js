module.exports=function(settings) {
var __t, __p = '';
__p += '(function () {\n	rudderanalytics = window.rudderanalytics = [];\n\n	var methods = [\n		\'load\',\n		\'page\',\n		\'track\',\n		\'identify\',\n		\'alias\',\n		\'group\',\n		\'ready\',\n		\'reset\',\n		\'getAnonymousId\',\n		\'setAnonymousId\',\n	];\n\n	for (var i = 0; i < methods.length; i++) {\n		var method = methods[i];\n		rudderanalytics[method] = function (methodName) {\n			return function () {\n				rudderanalytics.push([methodName].concat(Array.prototype.slice.call(arguments)));\n			};\n		}(method);\n	}\n\n	// Define a method to load Analytics.js from our CDN,\n	// and that will be sure to only ever load it once.\n	rudderanalytics.load = function(options){\n		// // Create an async script element based on your key.\n		var script = document.createElement(\'script\');\n		script.type = \'text/javascript\';\n		script.async = true;\n		script.src = \'https://cdn.rudderlabs.com/v1/rudder-analytics.min.js\';\n\n		// // Insert our script next to the first script element.\n		var first = document.getElementsByTagName(\'script\')[0];\n		first.parentNode.insertBefore(script, first);\n		analytics._loadOptions = options;\n	};\n\n	// Load Analytics.js with your key, which will automatically\n	// load the tools you\'ve enabled for your account. Boosh!\n	' +
((__t = ( settings.load )) == null ? '' : __t) +
'\n\n	// Make the first page call to load the integrations. If\n	// you\'d like to manually name or tag the page, edit or\n	// move this call however you\'d like.\n	' +
((__t = ( settings.page )) == null ? '' : __t) +
'\n})();\n';
return __p
}