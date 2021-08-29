var arr = ["duduk", "guitar", "sitar", "tar"];
window.onload = function () {
	var name = arr[Math.floor(Math.random() * 4)];
	var link1 =  document.getElementById("link");
	link1.innerHTML = name;
	link1.href = name + ".html";
}
