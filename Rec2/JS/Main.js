	var xmlDoc = "", Type ;
	
	window.onload = function () {
		try {  
			/*setInterval(function(){ 
				if  (xmlDoc != xml()) {
					xmlDoc = xml();  
					document.getElementById("menu").innerHTML = "";
					load_menu();
				}
			}, 500);*/
		}
		catch (e) { alert(e); }
		xmlDoc = xml();
		//alert (recs_name());
	}
	
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

	function getHTML (fileName) {
		function getXMLHttpRequest() {
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
		xmlhttp.open("GET", fileName, false);
		xmlhttp.send();
		return xmlhttp.responseText;
	}

	function load_menu() {
		xmlDoc = xml();
		Type = xmlDoc.getElementsByTagName("Type");
		for (i = 1; i < Type.length; i++) {
			var nameE = Type[i].childNodes[0].nodeValue;
			var nameH = Type[i].getAttribute("name");

			var li = document.createElement("li");
			li.setAttribute("class","dropdown");
			li.setAttribute("title", nameH);
			li.setAttribute("role", "navigation")
			
			var a = document.createElement("a");
			a.setAttribute("class", "dropdown-toggle");
			a.setAttribute("data-toggle", "dropdown");
			a.setAttribute("role", "button"); 
			a.setAttribute("aria-haspopup", "true");
			a.setAttribute("aria-expanded", "false");
			a.setAttribute("href", "javascript:void(0);");
			
			var span = document.createElement("span");
			span.setAttribute("class","caret");
			var txt = document.createTextNode(nameH);         // Create a text node
			var ul = document.createElement("ul");
			ul.setAttribute("class","dropdown-menu");

			a.appendChild(txt);
			a.appendChild(span);
			li.appendChild(a);
			li.appendChild(ul);

			type_name = xmlDoc.querySelector('Rec[type="' + nameE +'"]');
			if (type_name != null) {
				type_name1 = type_name.childNodes;
				for (j = 2; j <= type_name1.length; j+=2) {
					var Name2 = (type_name.childNodes[j-1].childNodes[0].nodeValue);
					var li1 = document.createElement("li");
					li1.setAttribute ("class", "text-right");
					var a = document.createElement("a");
					a.setAttribute("href", "index.html?Rec=" + window.btoa(nameE + (j/2) +  ".html") + "&qwe=hrz");
					a.setAttribute("tabindex", "-1");
					a.setAttribute("data-toggle","tooltip")
					a.setAttribute("title", Name2);

					var txt = document.createTextNode(Name2);         // Create a text node
					a.appendChild(txt);
					li1.appendChild(a);
					ul.appendChild(li1);
				}
			}
			document.getElementById("menu").appendChild(li);     // Append <li> to <ul> with id="myList" 
		}	
		
		Home.setAttribute ("onclick", "window.location ='index.html?Rec=" + window.btoa("home.html") + "&qwe=hrz'");
		About.setAttribute ("onclick", "window.location ='index.html?Rec=" + window.btoa("about.html") + "&qwe=hrz'");
		//alert(cnt());
	}

	function Search (txt) {
		var val1 = xmlDoc.querySelectorAll('Rec[tag*="' + txt + '"]');
		var val2 = xmlDoc.querySelectorAll('Rec[author*="' + txt + '"]'); 
		var val3 = xmlDoc.querySelector('Type[name ="' + txt + '"]');
		if ( ((val1 == null) || (val1 == undefined) || (val1.length == 0)) &&
			 ((val2 == null) || (val2 == undefined) || (val2.length == 0)) &&
			 ((val3 == null) || (val3 == undefined) || (val3.length == 0)) ){
			
			BootstrapDialog.show({title:"חיפוש", message:"לא נמצאו ערכי החיפוש"});
			//alert ("לא נמצאו ערכי החיפוש");
			return;
		}

		
		var loc = "search.html?search=" + encodeURI(encodeURI(txt));
		window.location = loc;
	}

	var cnt = function() {
		var Rec = xmlDoc.querySelectorAll('Rec[tag*=","], Rec[author]');
		return (Rec.length);
	}

	var recs_name = function() {
		var Rec = xmlDoc.querySelectorAll('Rec[tag], Rec[author]');
		var recs_names = [];
		for (i = 0; i < Rec.length; i++) {
			recs_names.push(Rec[i].textContent);
		}
		
		return recs_names;
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

/*--------------------------------------------------------------------------------------------------------------------------------------*/
function setBodyParams () {
	var body = document.getElementsByTagName("body")[0];
	var Bottom = document.getElementsByTagName("footer")[0];
	var Top = document.getElementsByTagName("nav")[0];

	bodyDiv.style.marginTop = Top.offsetHeight + "px";
	//bodyDiv.style.marginBottom = (Bottom.offsetTop) + "px";
	//bodyDiv.style.height = Math.abs(Bottom.offsetTop - Top.offsetHeight) + "px";

}