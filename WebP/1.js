tday = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday",
		"Friday", "Saturday");

tmonth = new Array("January", "February", "March", "April", "May", "June",
		"July", "August", "September", "October", "November", "December");

window.onload = function(e) {
	clock();
}

function clock() {
	var now = new Date();
	var TDstr;

	// time
	var tVal = document.getElementById("tVal").value;
	var dVal = document.getElementById("dVal").value;

	if (dVal == "v1") {
		TDstr = tday[now.getDay()] + ", " + tmonth[now.getMonth()] + " "
				+ checkTD(now.getDate());
	}

	else {
		TDstr = checkTD(now.getMonth() + 1);
		TDstr += "/" + checkTD(now.getDate());
		TDstr += "/" + checkTD(now.getUTCFullYear());
	}

	if (tVal == "v1") {

		TDstr += " " + checkTD(now.getHours());
		TDstr += ":" + checkTD(now.getMinutes());
		TDstr += ":" + checkTD(now.getSeconds());
	}

	else {
		TDstr += " "
				+ checkTD((now.getHours() < 13) ? now.getHours() : now
						.getHours() - 12);
		TDstr += ":" + checkTD(now.getMinutes());
		TDstr += ":" + checkTD(now.getSeconds());
		TDstr += checkTD((now.getHours() < 12) ? " AM" : " PM");
	}

	document.getElementById('DT').innerHTML = TDstr;

	setTimeout("clock()", 150);
}

function checkTD(i) {
	if (i < 10) {
		i = "0" + i
	}
	; // add zero in front of numbers < 10
	return i;
}

function myFunction() {
	var c1 = Math.floor((Math.random() * 256));
	var c2 = Math.floor((Math.random() * 256));
	var c3 = Math.floor((Math.random() * 256));
	
	document.getElementById("demo").innerHTML = "Hello JavaScript!";
	document.getElementById("demo").style.color = "rgb(" + c1 + "," + c2 + "," + c3 + ")";
}


function get_factor(n) {
	var sr = Math.sqrt(n);
	// try to find a factor that is not 1.
	for (var i = 2; i <= sr; i += 1) {
		if (n % i == 0) // is n divisible by i?
			return i;
	}
	return 1; // n is a prime.
} // End of get_factor function.

function communicate(Value) { // communicate with the user.
	var i = Value; // get checked number, using DOM.
	// it is a valid input?
	if (isNaN(i) || (i <= 0) || (Math.floor(i) != i)) {
		alert("The checked object should be a whole positive number");
		return;
	}
	var factor = get_factor(i);
	if (factor == 1)
		alert(i + " is a prime");
	else
		alert(i + " is not a prime, " + i + "=" + i / factor + "x" + factor);
} // End of communication function

function Prime() {
	Val = document.getElementById("primetest").value;
	communicate(Val);
}

function IDValidator(id) {
	id += ""; // cast as string
	if (id.length != 9 || isNaN(id)) {
		return false;
	}
	var counter = 0, incNum;
	for (i in id) {
		incNum = Number(id[i]) * ((i % 2) + 1);// multiply digit by 1 or 2
		counter += (incNum > 9) ? incNum - 9 : incNum;// sum the digits up and
		// add to counter
	}
	return (counter % 10 == 0);
}

function Valid() {
	Val = document.getElementById("IDBox").value;
	Val = IDValidator(Val);
	alert(Val);
}
