
var funcs = [ 'abs', 'acos', 'acosh', 'asin', 'asinh', 'atan', 'atanh',
		'cbrt ', 'ceil', 'clz32 ', 'cos', 'cosh', 'exp', 'expm1', 'floor',
		'fround', 'hypot', 'imul', 'log', 'log1p', 'log10', 'log2', 'max',
		'min', 'pow', 'random', 'round', 'sign', 'sin', 'sinh', 'sqrt', 'tan',
		'tanh', 'trunc', 'PI', 'E' ];

var Obj;

function Show() {
	val = document.getElementById("txt").value.toString();
	
	if (val.trim() == '') {
		alert("You didn't enter anything");
		return;
	}


	//val = replace(val);
	// alert(val);
	try {
		//val = eval("Answer = " + val)
		var Obj = new BigEval();
		val = Obj.exec(val); //-7
		alert (val);
	} catch (err) {
		alert(err);
	}

	var val = parseFloat(val);
	if (isNaN(val) || !isFinite(val)) {
		document.getElementById("result").value = val;
		alert("You entered wrong expression");
		return;
	}

	Sel = document.getElementById("ans");
	if (Sel.length > 0) {
		try {
			if (Sel[Sel.length - 1].value == val)
				return;
		} catch (err) {
			alert(err);
		}
	}

	var opt = document.createElement("OPTION");
	opt.text = (Sel.length + 1) + ".  " + val;
	opt.value = val;
	opt.style = "text-align: left; align-content: left; color: black;"

	opt.ondblclick = function() {
		alert(this.value);
	};

	Sel.add(opt);
	Sel.selectedIndex = Sel.length - 1;
	document.getElementById("res").innerHTML = "&nbsp" + val;
}

function replace(Val) {
	Val = Val.toString();

	// Val = Val.replace(new RegExp(" ", "g"), "");
	for (i = 0; i < funcs.length; i++) {
		Rx = new RegExp("\\b" + funcs[i] + "\\b", "g");
		Val = Val.replace(Rx, "Math." + funcs[i]);
		// alert (v + '\n' + val);
	}

	for (x in Math) {
		Rx = new RegExp("\\b" + x + "\\b", "g");
		Val = Val.replace(Rx, "Math." + x);
		// alert(x);
	}

	return Val;
}

function ans(num) {
	Sel = document.getElementById("ans");
	if (Sel.length == 0)
		return 0;
	if ((num > Sel.length) || (num == -1))
		num = Sel.length;
	return parseFloat(Sel[num - 1].value);
}




function expr (expr) {

    var chars = expr.split("");
    var n = [], op = [], index = 0, oplast = true;

    n[index] = "";

    // Parse the expression
    for (var c = 0; c < chars.length; c++) {

        if (isNaN(parseInt(chars[c])) && chars[c] !== "." && !oplast) {
            op[index] = chars[c];
            index++;
            n[index] = "";
            oplast = true;
        } else {
            n[index] += chars[c];
            oplast = false;
        }
    }

    // Calculate the expression
    expr = parseFloat(n[0]);
    for (var o = 0; o < op.length; o++) {
        var num = parseFloat(n[o + 1]);
        switch (op[o]) {
            case "+":
                expr = expr + num;
                break;
            case "-":
                expr = expr - num;
                break;
            case "*":
                expr = expr * num;
                break;
            case "/":
                expr = expr / num;
                break;
        }
    }

    return expr;
}