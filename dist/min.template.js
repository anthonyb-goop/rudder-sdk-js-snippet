module.exports=function(settings) {
var __t, __p = '';
__p += '!function(){rudderanalytics=window.rudderanalytics=[];for(var t=["load","page","track","identify","alias","group","ready","reset","getAnonymousId","setAnonymousId"],a=0;a<t.length;a++){var e=t[a];rudderanalytics[e]=function(t){return function(){rudderanalytics.push([t].concat(Array.prototype.slice.call(arguments)))}}(e)}rudderanalytics.load=function(t){var a=document.createElement("script");a.type="text/javascript";a.async=!0;a.src="https://cdn.rudderlabs.com/v1/rudder-analytics.min.js";var e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(a,e);analytics._loadOptions=t};\n' +
((__t = ( settings.load )) == null ? '' : __t) +
'\n' +
((__t = ( settings.page )) == null ? '' : __t) +
'}();';
return __p
}