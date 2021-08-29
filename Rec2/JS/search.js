	var xmlDoc, Type;

	function load_menu1() {
		xmlDoc = xml();
		Type = xmlDoc.getElementsByTagName("Type");
		for (i = 1; i < Type.length; i++) {
			var nameE = Type[i].childNodes[0].nodeValue;
			var nameH = Type[i].getAttribute("name");

			var a = document.createElement("a");
			a.setAttribute("href", "javascript:void(0);");
			a.setAttribute("class","list-group-item text-right"); 
			a.setAttribute("data-toggle","collapse");
			a.setAttribute("data-target","#menu_rec" + i); 
			a.setAttribute("data-parent","#menu_rec");
			a.setAttribute("title",nameH);
			
			type_name = xmlDoc.querySelector('Rec[type="' + nameE +'"]');
			if (type_name != null) {
				type_name1 = type_name.childNodes;
				
				var span = document.createElement("span");
				//span.setAttribute("class","label label-info navbar-left");
				span.setAttribute("class","badge navbar-left");
				span.innerHTML = (type_name1.length - 1) / 2
				
				a.innerHTML+=nameH + "&nbsp;"
				a.appendChild(span);
				menu_rec.appendChild(a);			
				
				var div = document.createElement("div");
				div.setAttribute("id", "menu_rec" + i);
				div.setAttribute("class", "sublinks collapse text-right");

				for (j = 2; j <= type_name1.length; j+=2) {
					var Name2 = (type_name.childNodes[j-1].childNodes[0].nodeValue);
					var a = document.createElement("a");
					a.setAttribute("href", nameE + (j/2) +  ".html");
					a.setAttribute("class","list-group-item small href");
					a.setAttribute("title", Name2);
					
					var span = document.createElement("i");
					span.setAttribute("class","fa fa-chevron-left");
					span.setAttribute("aria-hidden","true");
					span.setAttribute("style","margin-right: 3em;");
					
					
					var txt = document.createTextNode(Name2 + " ");         // Create a text node
					
					//a.innerHTML = "<span class="glyphicon glyphicon-chevron-left"></span>" + Name2;
					a.appendChild(txt);
					a.appendChild(span);
					
					div.appendChild(a);
				}
				menu_rec.appendChild(div);
			}
			
		}	
	}
	
	function load_search_menu (txt) {
		xmlDoc = xml();
		Type = xmlDoc.getElementsByTagName("Type");
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

					var a = document.createElement("a");
					a.setAttribute("href", "javascript:void(0);");
					a.setAttribute("class","list-group-item text-right"); 
					a.setAttribute("data-toggle","collapse");
					a.setAttribute("data-target","#menu_rec" + i); 
					a.setAttribute("data-parent","#menu_rec");
					a.setAttribute("title", val.length + " - " + nameH);
					
					var span = document.createElement("span");
					span.setAttribute("class","label label-info");
					span.innerHTML = val.length;
					
					a.innerHTML+=nameH + "&nbsp;"
					a.appendChild(span);
					menu_rec.appendChild(a);			
					
					var div = document.createElement("div");
					div.setAttribute("id", "menu_rec" + i);
					div.setAttribute("class", "sublinks collapse text-right");

					
					if (val.length > 0) {
						for (j = 0; j < val.length; j++) {
							var Name2 = val.item(j).childNodes[0].nodeValue;
							var ind = Array.from (type_name.childNodes).indexOf(val.item(j));
							//output_txt += "<a href = '" + nameE + Math.ceil(ind / 2) + ".html' class = 'text'><h4>" + Name2 + "</h4></a>";
							var a = document.createElement("a");
							a.setAttribute("href", nameE + Math.ceil(ind / 2) +  ".html");
							a.setAttribute("class","list-group-item small href");
							a.setAttribute("title", Name2);
							
							var span = document.createElement("i");
							span.setAttribute("class","fa fa-chevron-left");
							span.setAttribute("aria-hidden","true");
							span.setAttribute("style","margin-right: 3em;");
							
							
							//var txt = document.createTextNode(Name2);         // Create a text node
							
							//a.innerHTML = "<span class="glyphicon glyphicon-chevron-left"></span>" + Name2;
							a.appendChild(document.createTextNode(Name2));
							a.appendChild(span);
							
							div.appendChild(a);

						}
						menu_rec.appendChild(div);
					}
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
				
				var nameE0 = Type1.childNodes[0].nodeValue;
				alert(nameE0);
				
				var Type2 = xmlDoc.getElementsByTagName("Type");
			
				for (i = 1; i < Type.length; i++) {
					var nameE = Type[i].childNodes[0].nodeValue;
					var nameH = Type[i].getAttribute("name");

					var a = document.createElement("a");
					a.setAttribute("href", "javascript:void(0);");
					a.setAttribute("class","list-group-item text-right"); 
					a.setAttribute("data-toggle","collapse");
					a.setAttribute("data-target","#menu_rec" + i); 
					a.setAttribute("data-parent","#menu_rec");
				
					type_name = xmlDoc.querySelector('Rec[type="' + nameE +'"]');
					if ((type_name != null) && (nameE == nameE0)) {
						type_name1 = type_name.childNodes;
						
						var span = document.createElement("span");
						span.setAttribute("class","label label-info");
						span.innerHTML = (type_name1.length - 1) / 2
						
						a.innerHTML+=nameH + "&nbsp;"
						a.appendChild(span);
						menu_rec.appendChild(a);			
						
						var div = document.createElement("div");
						div.setAttribute("id", "menu_rec" + i);
						div.setAttribute("class", "sublinks collapse text-right");

						for (j = 2; j <= type_name1.length; j+=2) {
								var Name2 = (type_name.childNodes[j-1].childNodes[0].nodeValue);
								var a = document.createElement("a");
								a.setAttribute("href", nameE + (j/2) +  ".html");
								a.setAttribute("class","list-group-item small href");
								a.setAttribute("title", Name2);
								
								var span = document.createElement("i");
								span.setAttribute("class","fa fa-chevron-left");
								span.setAttribute("aria-hidden","true");
								span.setAttribute("style","margin-right: 3em;");
								
								
								var txt = document.createTextNode(Name2);         // Create a text node
							
								//a.innerHTML = "<span class="glyphicon glyphicon-chevron-left"></span>" + Name2;
								a.appendChild(txt);
								a.appendChild(span);
							
							div.appendChild(a);
						}
						menu_rec.appendChild(div);
					}
					
					else if (nameE != nameE0) {
						var span = document.createElement("span");
						span.setAttribute("class","label label-info");
						span.innerHTML = "0";
						
						a.innerHTML+=nameH + "&nbsp;"
						a.appendChild(span);
						menu_rec.appendChild(a);			
					}
				}
				return true;
			}
			catch (e) { alert (e); return false; }
		}	
	
		if ( !(Search_by_attr ("tag", txt) || Search_by_attr ("author", txt) || Search_by_Type (txt)) ) alert ("לא נמצאו ערכי החיפוש");
	}
	
	function res_cnt(search) {
		var SearchTag = xmlDoc.querySelectorAll('Type[name ="' + search + '"], Rec[tag *="' + search + '"], Rec[author ="' + search + '"]');
												
		return SearchTag.length;
	}