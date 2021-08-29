	var xmlDoc, Type ;
	
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
	}
	
	function load_programme () {
		if (!location.search.includes("?")) {
			location.replace("index.html?Rec=" + window.btoa("home.html") + "&qwe=hrz");
			return;
		}
		var fileName = getParamValue("Rec");
		var qwe = getParamValue("qwe");
		
		if (getParamValue("search") != undefined) {
			search = decodeURI(decodeURI(getParamValue("search"))); 
			iframe = document.getElementsByTagName("iframe")[0];
			iframe.src = "search.html" + "?search=" + encodeURI(search);
			load_menu();
			return;
		}
		
		if ((fileName != undefined) && (qwe == "hrz")) {
			iframe = document.getElementsByTagName("iframe")[0];
			iframe.src = window.atob(fileName) + "?qwe=hrz";
			load_menu();
			return;
		}
		
		else {
			fileName = (fileName != undefined) ? fileName : window.btoa("home.html");
			location.replace("index.html?Rec=" + fileName + "&qwe=hrz");
		}
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
			return;
		}

		
		var loc = "index.html?search=" + encodeURI(encodeURI(txt));
		window.location = loc;
	}

	function cnt() {
		var Rec = xmlDoc.querySelectorAll('Rec[tag*=","]');
		return (Rec.length);
	}
