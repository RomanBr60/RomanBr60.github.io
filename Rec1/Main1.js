		window.onload = function () {
			if (getParamValue("qwe") == undefined) {
				var fileName = location.href.split("/");
				fileName = window.btoa(fileName[fileName.length - 1]);
				window.parent.location = "index.html?op=" + fileName + "&qwe=hrz";
			}
				
			xmlDoc = xml();
			var author_name = document.querySelector('meta[name="author"]').content;
			var Author = xmlDoc.querySelector('Author[author="' + author_name +'"]');
			var a = document.getElementsByTagName("a")[0];
			a.href = Author.getAttribute("loc");
			a.innerHTML = author_name;
		}
