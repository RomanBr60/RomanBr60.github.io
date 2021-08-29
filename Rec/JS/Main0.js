	window.twttr = (function(d, s, id) {
		var js, fjs = d.getElementsByTagName(s)[0],
		t = window.twttr || {};
		if (d.getElementById(id)) return t;
		js = d.createElement(s);
		js.id = id;
		js.src = "https://platform.twitter.com/widgets.js";
		fjs.parentNode.insertBefore(js, fjs);

		t._e = [];
		t.ready = function(f) {
			t._e.push(f);
		};

		return t;
	}(document, "script", "twitter-wjs"));
	
	function xml () {
		function getXMLHttpRequest() 
		{
			if (window.XMLHttpRequest) {
				return new window.XMLHttpRequest;
			}
			else {
				try {
					return new ActiveXObject("MSXML2.XMLHTTP.3.0");
				}
				catch(ex) {
					return null;
				}
			}
		}
			
		xmlhttp = getXMLHttpRequest();
		xmlhttp.open("GET", "Other/list.xml", false);
		xmlhttp.send();
		return xmlhttp.responseXML;
	}

	function getParamValue(paramName) {
		var url = window.location.search.substring(1); //get rid of "?" in querystring
		var qArray = url.split('&'); //get key-value pairs
		for (var i = 0; i < qArray.length; i++) 
		{
			var pArr = qArray[i].split('='); //split key and value
			if (pArr[0] == paramName) 
				return pArr[1]; //return value
		}
	}

	if (!String.prototype.includes) {
		String.prototype.includes = function(search, start) {
		'use strict';
			if (typeof start !== 'number') {
			  start = 0;
			}
		
			if (start + search.length > this.length) {
				return false;
			} else {
				return this.indexOf(search, start) !== -1;
			}
		};
	}
	
