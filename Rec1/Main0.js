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
		xmlhttp.open("GET", "list.xml", false);
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
