var txt = '', xmlDoc = '', xmlDoc1 = '', xmlDoc2 = '';
var fileName = 'words.xml';
function load(name) {
	CleanLists();
	xmlhttp = new XMLHttpRequest();
	xmlhttp.open("OPEN", name, false);
	xmlhttp.send();
	xmlDoc = xmlhttp.responseXML;
	xmlDoc1 = xmlhttp.responseXML;
	xmlDoc2 = xmlhttp.responseText;
	//document.getElementById("txt1").value = (xmlhttp.responseText);
	var languages = xmlDoc1.getElementsByTagName("dic")[0].children;

	var Sel = document.getElementById("sel");

	for (i = 0; i < languages.length; i++) {
		var lang = languages[i].nodeName;
		var opt = document.createElement("OPTION");
		opt.text = lang;
		opt.value = lang;

		opt.onclick = function() {
			ShowWords(this.value);
		};

		// opt.ondblclick = function() {
		// // RenameLang();
		// }
		//
		// opt.onkeypress = function(fun) {
		// alert('12');
		// }

		Sel.add(opt);

	}
	xmlhttp.abort();

	Sel.selectedIndex = 0;
	ShowWords(Sel[0].value);

	//var blob = new Blob('<words>123</words>', 'text/xml');
	var aFileParts = ['<a id="a">hey!</a>'];
	var oMyBlob = new Blob(aFileParts, { "type" : "text/xml" });
	//FileSave(oMyBlob, "D:\1.xml");
	//alert (saveAs);
	saveAs (oMyBlob, ".xml");

}

function ShowWords(lang) {
	var words1 = xmlDoc1.getElementsByTagName(lang)[0].children;
	var text = document.getElementById("txt");
	var Sel = document.getElementById("sel");

	while (text.length > 0) {
		text.remove(text.length - 1);
	}

	for (i = 0; i < words1.length; i++) {
		var opt = document.createElement("OPTION");
		opt.text = words1[i].childNodes[0].nodeValue;
		opt.value = words1[i].childNodes[0].nodeValue;

		opt.ondblclick = function() {
			RenameW();
		}

		text.add(opt);
	}

}

function RemoveL() {
	var Sel = document.getElementById("sel");
	if (Sel.length < 1) {
		alert("Thre are no languages to remove");
		return;
	}

	var lang = Sel[Sel.selectedIndex].value;
	lang = xmlDoc1.getElementsByTagName(lang)[0];

	function RemoveChildren(Ch) {
		var x = Ch.firstChild;
		var y = Ch.firstChild;
		while (x != null) {
			if (x.hasChildNodes()) {
				RemoveChildren(x);
			}

			y = y.nextSibling;
			Ch.removeChild(x);
			x = y;
		}
	}

	RemoveChildren(lang);

	dic = xmlDoc1.getElementsByTagName('dic')[0];
	var L = lang.nextSibling;
	// alert (lang.nodeName + '\n' + L.nodeName);

	try {
		dic.removeChild(lang);
		dic.removeChild(L);
	}

	catch (err) {
		alert(err);
	}

	var p = Sel.selectedIndex;
	Sel.remove(Sel.selectedIndex);
	if (Sel.length > 0) {
		if (p > 0)
			Sel.selectedIndex = p - 1;
		if (p == 0)
			Sel.selectedIndex = 0;
	}

	if (dic.childNodes.length == 1) {
		var text = document.getElementById("txt");
		while (text.length > 0) {
			text.remove(text.length - 1);
		}
		return;
	}

	ShowWords(Sel[Sel.selectedIndex].value);
}

function RenameL() {
	var t = prompt("Enter new language name");
	var Sel = document.getElementById("sel");
	var Lang = Sel[Sel.selectedIndex].value;
	var Language = xmlDoc1.getElementsByTagName(Lang)[0];

	var Language1 = xmlDoc.createElement(t);

	try {
		// alert(Language.prefix);
		var Children = Language.childNodes;
		var x = Language.firstChild;
		while (x != null) {
			Language1.appendChild(x.cloneNode(true));
			x = x.nextSibling;
		}

	}

	catch (err) {
		alert(err);
	}

	dic = xmlDoc1.getElementsByTagName('dic')[0];

	dic.appendChild(Language1);
	dic.appendChild(xmlDoc.createTextNode(''));

	// dic.appendChild(Language.cloneNode(true));
	// dic.appendChild(xmlDoc.createTextNode(''));

	dic.replaceChild(Language, Language1);
	// alert(Language.nodeName)

	// var opt = document.createElement("OPTION");
	// opt.text = t;
	// opt.value = t;
	//
	// opt.onclick = function() {
	// ShowWords(this.value);
	// };
	//
	// opt.ondblclick = function() {
	// // RenameLang();
	// }
	//
	// Sel.add(opt);

}

function InsertL() {
	var Sel = document.getElementById("sel");
	var languages = xmlDoc1.getElementsByTagName('dic')[0];

	var t = prompt("Enter new language name");
	t = t.trim();
	if (t.length > 5) {
		alert("Too long name for language");
		return;
	}
	if (t == '') {
		alert("You didn't enter any language name");
		return;
	}

	var lang = languages.children;
	for (i = 0; i < lang.length; i++) {
		var L = lang[i].tagName.trim().toUpperCase();
		if (t.toUpperCase() == L) {
			alert("The language already exists");
			return;
		}
	}

	languages.appendChild(xmlDoc.createElement(t));
	languages.appendChild(xmlDoc.createTextNode(''));

	var opt = document.createElement("OPTION");
	opt.text = t;
	opt.value = t;

	opt.onclick = function() {
		ShowWords(this.value);
	};

	opt.ondblclick = function() {
		// RenameLang();
	}

	Sel.add(opt);

	var L = xmlDoc1.getElementsByTagName(t)[0];
	L.appendChild(xmlDoc.createTextNode(''));
}

function RemoveW() {
	var Sel = document.getElementById("sel");
	var text = document.getElementById("txt");
	if (text.length == 0) {
		alert("there are no words to remove");
		return;
	}

	if (text.selectedIndex < 0) {
		alert("You must select a word from the words' list")
		return;
	}

	var lang = Sel[Sel.selectedIndex].childNodes;
	var word = xmlDoc1.getElementsByTagName(lang[0].nodeValue)[0].childNodes;
	lang = xmlDoc1.getElementsByTagName(lang[0].nodeValue)[0];
	lang.removeChild(word[text.selectedIndex * 2]);
	lang.removeChild(word[text.selectedIndex * 2 + 1]);

	var p = text.selectedIndex;
	text.remove(text.selectedIndex);
	if (text.length > 0) {
		if (p > 0)
			text.selectedIndex = p - 1;
		if (p == 0)
			text.selectedIndex = 0;
	}

}

function RenameW() {
	var text = document.getElementById("txt");
	if (text.selectedIndex < 0) {
		alert("You must select a word from the words' list")
		return;
	}

	var Sel = document.getElementById("sel");

	lang = Sel[Sel.selectedIndex].childNodes[0].nodeValue;
	var words1 = xmlDoc1.getElementsByTagName(lang)[0].children;

	var opt = text[text.selectedIndex];
	var t = prompt("Enter new value", opt.value);
	t = t.trim();
	if (t != '') {
		for (i = 0; i < words1.length; i++) {
			var w = words1[i].childNodes[0].nodeValue;
			w = w.trim().toUpperCase();
			if (t.toUpperCase() == w) {
				alert("The word already exists");
				return;
			}
		}
	} else
		return;

	var w = words1[text.selectedIndex * 2 + 1];
	w.childNodes[0].nodeValue = t;

	opt.value = t;
	opt.text = t;
}

function InsertW() {
	var Sel = document.getElementById("sel");
	var text = document.getElementById("txt");
	if (Sel.length == 0) {
		alert("There is no languages");
		return;
	}

	var lang = Sel[Sel.selectedIndex].childNodes;
	lang = xmlDoc1.getElementsByTagName(lang[0].nodeValue)[0];
	words = lang.children;
	var t = prompt("Enter new word");
	t = t.trim();
	if (t == '') {
		alert("You didn't enter any word");
		return;
	}

	for (i = 0; i < words.length; i++) {
		var w = words[i].childNodes[0].nodeValue;
		w = w.trim().toUpperCase();
		if (t.toUpperCase() == w) {
			alert("The word already exists");
			return;
		}
	}

	var w = xmlDoc.createElement("word");
	w.appendChild(xmlDoc.createTextNode(t));

	lang.appendChild(w);
	lang.appendChild(xmlDoc.createTextNode(''));

	var opt = document.createElement("OPTION");
	opt.text = t;
	opt.value = t;

	opt.ondblclick = function() {
		RenameW();
	}

	text.add(opt);
}

function NewDoc() {
	fileName = '';
	var Xml = "<dic>\n\n</dic>"
	parser = new DOMParser();
	xmlDoc = parser.parseFromString(Xml, "text/xml");
	xmlDoc1 = parser.parseFromString(Xml, "text/xml");
	CleanLists();
}

function CleanLists() {
	var Sel = document.getElementById("sel");
	var text = document.getElementById("txt");

	function CleanList(obj) {
		while (obj.length > 0) {
			obj.remove(obj.length - 1);
		}
	}

	CleanList(Sel);
	CleanList(text);
}

function Show() {
	// var words1 = xmlDoc1.getElementsByTagName('heb')[0].childNodes;
	var text = document.getElementById("txt1");
	text.value = '';
	var languages1 = xmlDoc1.getElementsByTagName("dic");
	var languages = languages1[0].children;

	// var txt = ''
	// for (i = 0; i < languages.length; i++) {
	// txt = txt + '\n' + i + ": " + languages[i].nodeName;
	// }

	//var txt = '\n<dict>';
	var txt = '<?xml version="1.0" encoding="UTF-8"?>\n<dict>';
	for (i = 0; i < languages.length; i++) {
		var lang = languages[i].nodeName;
		txt = txt + '\n\t<' + lang + '>';
		var words1 = xmlDoc1.getElementsByTagName(lang)[0].children;

		for (j = 0; j < words1.length; j++) {
			txt = txt + '\n\t\t<word>' + words1[j].childNodes[0].nodeValue
					+ "</word>";
		}

		txt = txt + '\n\t</' + lang + '>';
	}
	txt = txt + '\n</dict>';
	var text = document.getElementById("txt1");

	// while (txt.search('\n\n') > -1) {
	// txt = txt.replace('\n\n', '\n');
	// }

	// var t = txt.match( /(<.[^(><.)]+>)/g);
	text.value = txt;
	var xmlhttp1 = new XMLHttpRequest();
	xmlhttp1.setRequestHeader("Content-Type", "text/xml");
	xmlhttp1.open("POST", "D:\1.xml",true);
	xmlhttp1.send(text.value);
	xmlhttp1.abort();
}

function ShowXml() {
	var Sel = document.getElementById("sel");
	var languages1 = xmlDoc1.getElementsByTagName("dic");
	var languages = languages1[0].childNodes;
	var txt = '';
	txt = '<span onclick = "Reduce(this, \'dic\')" style = "border: 1px ridge white; 	cursor: pointer;">-</span> <span style = "color: blue;">&lt;dict&gt;</span><span name = "dic">';

	for (i = 0; i < Sel.length; i++) {
		var L = Sel[i].value;
		txt = txt
				+ '\n\t\t\t <span onclick = "Reduce(this, \''
				+ L
				+ '\')" style = "border: 1px solid white; cursor: pointer;">-</span>'
				+ '<span style = "color: red;">&lt;' + L
				+ '&gt;</span><span name = "' + L + '">';
		var words = xmlDoc1.getElementsByTagName(L)[0].childNodes;
		for (j = 1; j < words.length; j += 2) {
			var w = words[j].childNodes[0].nodeValue;
			txt = txt + '\n\t\t\t\t'
					+ '<span style = "color: #008000;">&lt;word&gt;</span>'
			txt = txt + w + '<span style = "color: green;">&lt;word&gt;</span>';

		}

		txt = txt + '\n\t\t\t' + '</span><span style = "color: red;">&lt;/' + L
				+ '&gt;</span>';
	}

	txt = txt + '\n\t\t'
			+ '</span><span style = "color: blue;">&lt;/dict&gt;</span>';
	
	document.getElementById("txt3").innerHTML = txt;
}

function Reduce(obj, lang) {
	var obj1 = document.getElementsByName(lang);
	obj.className = "tree";
	if (obj.innerHTML == "-") {
		obj.innerHTML = "+";
		obj.style = "border: 1px dotted black; cursor: pointer;";
		for (i = 0; i < obj1.length; i++) {
			obj1[i].style = "display: none;";
		}
	}

	else {
		obj.innerHTML = "-";
		obj.style = "border: 1px solid white; cursor: pointer;";
		for (i = 0; i < obj1.length; i++) {
			obj1[i].style = "display: '' ";
		}
	}
}

function chooseFile() {
	var chooser = document.getElementById('file-input');
	alert(chooser.value);
}

function Save() {
	var Sel = document.getElementById("sel");
	if (Sel.length == 1)
		return;
	var Chk = true;
	var words = xmlDoc1.getElementsByTagName("dic")[0].firstElementChild.nextElementSibling;
	// alert (words.childNodes.length);
	while (Chk && (words != null)) {
		SibElement = words.previousElementSibling;
		Chk = Chk && (words.childNodes.length == SibElement.childNodes.length);
		words = words.nextElementSibling;
	}
	if (!Chk) {
		alert("Can't Save. All the languages must have the same quantity of words");
		SaveAs();
		return;
	}
	alert("ok!");
}

function SaveAs() {

}
