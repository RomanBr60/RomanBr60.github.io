		window.onload = function () {
			var fileName = location.href.split("/");
		
			if (getParamValue("qwe") == undefined) {
				fileName = window.btoa(fileName[fileName.length - 1]);
				window.parent.location = "index.html?Rec=" + fileName + "&qwe=hrz";
			}
				
			try {
				xmlDoc = xml();
				fileName = fileName[fileName.length - 1].split("?")[0]

				/*div = document.createElement("div");
				div.setAttribute("class","fb-comments navbar-fixed-bottom"); 
				div.setAttribute("data-href","https://RomanBr60.github.io/" + fileName);
				div.setAttribute("data-numposts","5");
				div.setAttribute("style", "background: white;");
				document.getElementsByTagName('body')[0].appendChild(div);*/

				div = document.createElement("div");
				div.setAttribute("class","fb-like navbar-left text-left"); 
				div.setAttribute("data-href","https://RomanBr60.github.io/Rec1/" + fileName);
				div.setAttribute("data-layout","button_count");
				div.setAttribute("data-action","like");
				div.setAttribute("data-size","large");
				div.setAttribute("data-show-faces","true")
				div.setAttribute("data-share","true")
				div.setAttribute("style", "margin-left: 15px; margin-top: 5px;");
				document.getElementById("div").appendChild (div);
				
				var author_name = document.querySelector('meta[name="author"]').content;
				var Author = xmlDoc.querySelector('Author[author="' + author_name +'"]');
				var a = document.getElementsByTagName("a")[0];
				a.href = Author.getAttribute("loc");
				a.setAttribute("data-toggle","tooltip")
				a.setAttribute("title", a.href);
				a.innerHTML = author_name;

				
				
				//a.parentNode.appendChild (div);
				//a.parentNode.insertBefore (div, a);
			}
			catch (e) {}
		}
		

