	var xmlDoc = xml ();
	var Type = xmlDoc.getElementsByTagName("Type");

	/*window.onload = function () {
		if ((getParamValue("qwe") == undefined) || (getParamValue("search") == undefined)) {
			window.location = "index.html?Rec=" + window.btoa("home.html") + "&qwe=hrz";		
		}
		
	}*/
	
	function load_Menu () {
		var len = Type.length - 1;
		var len1 = 12 / len;
		var txt;
		try {
			for (i = len; i >= 1; i--) {
				txt = "<h3 class ='b' style='margin-top: 0px;'>:" + Type[i].getAttribute("name") + "</h3>";
				var div = document.createElement("div");
				div.setAttribute("class", "text-right col-xs-" + len1 + " col-sm-" + len1 + " col-md-" + len1 +  "col-lg-" + len1);
				div.setAttribute("style", "width=100%;");
				div.innerHTML = txt;
				var div1 = document.createElement("div");
				div1.setAttribute("id", "doc" + i);
				div1.setAttribute("name", "doc" + i);
				div1.setAttribute("style", "width=100%;");
				div.appendChild(div1)
				document.getElementById("row").appendChild(div);
			}
		}
		catch (e) { alert (e); }
	}
	
	function Search (txt) {
		function Search_by_attr (tag, txt) {
			var output_txt = "";
			try {
				var val = xmlDoc.querySelectorAll('Rec[' + tag + '*="' + txt + '"]');
				if ((val == null) || (val == undefined) || (val.length == 0)) {
					return false;
				}
				for (i = 1; i < Type.length; i++) {
					var output_txt = "";
					var nameE = Type[i].childNodes[0].nodeValue;
					var nameH = Type[i].getAttribute("name");
					type_name = xmlDoc.querySelector('Rec[type="' + nameE +'"]');
					val = type_name.querySelectorAll('Rec[' + tag + '*="' + txt + '"]');
					if (val.length > 0) {
						for (j = 0; j < val.length; j++) {
							var Name2 = val.item(j).childNodes[0].nodeValue;
							
							var ind = Array.from (type_name.childNodes).indexOf(val.item(j));
							
							output_txt += "<a href = '" + nameE + Math.ceil(ind / 2) + ".html' class = 'text'><h4>" + Name2 + "</h4></a>";
						}
						setTxt(output_txt, i);
					}
					else setTxt("", i);
				}
				return true;
			}
			catch (e) { alert (e); return false; }
		}
		
		function Search_by_Type (txt) {
			try {
				var Type1 = xmlDoc.querySelector('Type[name ="' + txt + '"]');
				if ((Type1 == null) || (Type1 == undefined) || (Type1.length == 0)) {
					return false;
				}
	
				var ind = Array.from (Type).indexOf(Type1);
				for (j = 1; j < Type.length; j++) {
					if (j == ind) {
						var Type_Name = Type1.childNodes[0].nodeValue;
						Type1  = xmlDoc.querySelector('Rec[type="' + Type_Name +'"]');
						var Elem = Type1.childNodes;
						var output_txt = "";
						for (i = 1; i < Elem.length; i+=2) {
							var Elem_Name = Elem[i].childNodes[0].nodeValue;
							output_txt += "<a href = '" + Type_Name + Math.ceil(i / 2) + ".html' class = 'text'><h4>" + Elem_Name + "</h4></a>";
						}
						setTxt(output_txt, j);
					}
					else setTxt("", j);
				}
				return true;
			}
			catch (e) { alert (e); return false; }
		}	
		
		function setTxt (txt, i) {
			document.getElementById(("doc" + i)).innerHTML = txt;
		}
		
		if ( !(Search_by_attr ("tag", txt) || Search_by_attr ("author", txt) || Search_by_Type (txt)) ) alert ("לא נמצאו ערכי החיפוש");
	}