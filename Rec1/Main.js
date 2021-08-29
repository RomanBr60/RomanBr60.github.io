	function load_menu() {
		
		xmlDoc = xml();
		var Type = xmlDoc.getElementsByTagName("Type");
		for (i = 1; i < Type.length; i++) {
			var nameE = Type[i].childNodes[0].nodeValue;
			var nameH = Type[i].getAttribute("name");

			var li = document.createElement("li");
			li.setAttribute("class","dropdown");
			li.setAttribute("title", nameH);

			var a = document.createElement("a");
			a.setAttribute("class","dropdown-toggle");
			a.setAttribute("data-toggle","dropdown");
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

			var	Typei = xmlDoc.querySelector('Rec[type="' + nameE +'"]');
			if (Typei != null) {
				var Typei1 = Typei.childNodes;
				for (j = 2; j <= Typei1.length; j+=2) {
					var Name2 = (Typei.childNodes[j-1].childNodes[0].nodeValue);
					var li1 = document.createElement("li");
					var a = document.createElement("a");
					
					//a.setAttribute("href", "javascript:void(0);")
					a.setAttribute("href", "index.html?op=" + window.btoa(nameE + (j/2) +  ".html") + "&qwe=hrz");
					//a.setAttribute("target", "iframe");
					var txt = document.createTextNode(Name2);         // Create a text node
					a.appendChild(txt);
					li1.appendChild(a);
					ul.appendChild(li1);
				}
			}
			document.getElementById("nav1").insertBefore(li, About);     // Append <li> to <ul> with id="myList" 
			//<a href="Soup1.html" target = "iframe">עדשים 1</a></li>*/
		}	
		
		load1(); 
	}

	function load1 () {
		if (!location.search.includes("?")) return;
		var fileName = window.atob(getParamValue("op"));
		var qwe = getParamValue("qwe");
		if ((fileName != undefined) && (qwe != undefined)) {
			iframe = document.getElementsByTagName("iframe")[0];
			iframe.src = fileName + "?qwe=hrz";
		}
	}

	
	

	
	
