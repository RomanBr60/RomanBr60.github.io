
	var $ = (id) => document.getElementById(id); 
	var $$ = (tag) => document.getElementsByTagName(tag); 
	

	function Print (text, newLine = false) {
		document.open();
		if (!newLine) document.write(text);
		else document.writeln(text);
		document.close();
	}

	/*var saveAs = saveAs || function (text, filename) {
		var blob = new Blob([text]);
		saveAs(blob, filename);
	}*/
		
	Math.degToRad = (x) => Math.PI * x / 180;
	Math.radToDeg = (x) => 180 * x / Math.PI;
  
	Math.logB = (n, b) => Math.log(n) / Math.log(b); 
	Math.sqrB = (n, b) => Math.pow2(n, 1 / b); 
	Math.pow2 = function(n, b = 2)  {
		if ((1/b) % 2 != 0) return Math.sign (n) * Math.pow(Math.abs(n), b);
		return Math.pow (n,b);
	}


	Math.factorial = (n) =>
		(n <= 1) ? 1 : n * Math.factorial(n - 1);
	
	Math.fibonacci = function (n) {
		if (n < 0) return this.pow (-1, this.abs(n) + 1) * this.fibonacci(this.abs (n));
		if (n == 0) return 0;
		if (n == 1) return 1;
		return this.fibonacci (n - 1) + this.fibonacci (n - 2);
    }
	
	Math.clip = (value, min, max) =>
		value < min ? min : value > max ? max : value;
	
	Math.cube = (x) => Math.pow(x,3);
	Math.square = (x) => Math.pow(x,2);

	
	Math.median = function () {
		var args = [].slice.call(arguments);
		args = args.sort(function(a, b){return a - b});
		med = this.ceil (args.length / 2) - 1;
		if (args.length % 2 == 0) return (args[med] + args[med + 1]) / 2;
		return args[med];
	}
	
	Math.sum = function () {
		var args = [].slice.call(arguments);
		return args.reduce(function(a, b){return a + b});
	}

	Math.avg = function () {
		var args = [].slice.call(arguments);
		return args.reduce(function(a, b){return a + b}) / arguments.length;
	}

	Math.range = function () {
			var args = [].slice.call(arguments);
			var min = args.sort(function(a, b){return a - b})[0];
			var max = args.sort(function(a, b){return b - a})[0];
			return max - min;
	}
	
	Math.mode = function () {
		var args = [].slice.call(arguments);
		if (arguments[0] instanceof Array) return args[0].mode();
		if (!args.isXArray ("number")) throw new TypeError('Type mismatch');
		return args.mode();
	}
	
	/*Math.prototype.min = function () {
			var args = [].slice.call(arguments);
			args = args.sort(function(a, b){return a - b});
			return args[0];
	}*/
		
	/*Math.max = Math.prototype.max || function(args) {
			alert (args);
			//var args = [].slice.call(arguments);
			var args1 = args.sort(function(a, b){return b - a});
			return args[0];
	}*/


	Date.prototype.getDayName = function(language = 'en-us', format){
		format = (format == true) ? "long" : "short";
		return this.toLocaleDateString(language ? language : 'en-us' , { weekday: format });
	}
	
	Date.prototype.getMonthName = function(language = 'en-us', format){
		format = format ? "long" : "short";
		return this.toLocaleDateString(language, { month: format });
	}


	String.prototype.isNumeric = function () {
		return (parseFloat(this).toString() == this);
	}
	
	String.prototype.rev = function () { return this.split("").reverse().join(""); }
	
	String.prototype.replaceStr = (search, replacement) => this.replace (new RegExp(search,"g"), replacement);
	

	if (String.prototype.trim == 'undefined') {
		String.prototype.trim = function () { 
			return this.replace(/^\s+|\s+$/g,''); 
		}
	}
	
	if (String.prototype.includes == 'undefined') {
		String.prototype.includes = function (str) { 
			return (this.indexOf (str) != -1) ; 
		}
	}

	
	Object.prototype.length = function () { return Object.keys(this).length; }
	Object.prototype.keys = function () { return Object.keys(this); }
	Object.prototype.values = function () { return Object.values(this); }
	
	Array.prototype.isXArray = function (type) {
			return this.every (n => (typeof n == type));	
	}
	
	Array.prototype.min = function () {
		if (!this.isXArray ("number"))   throw new TypeError('Type mismatch');
		return Math.min.apply (this, this);
	}
	
	Array.prototype.max = function () {
		if (!this.isXArray ("number"))  throw new TypeError('Type mismatch');
		return Math.max.apply (this, this);
	}

	Array.prototype.median = function () {
		if (!this.isXArray ("number"))  throw new TypeError('Type mismatch');
		return Math.median.apply (Math, this);
	}
	
	Array.prototype.sum = function () {
		if (!this.isXArray ("number"))  throw new TypeError('Type mismatch');
		return Math.sum.apply (this, this);
	}
	
	Array.prototype.avg = function () {
		if (!this.isXArray ("number"))  throw new TypeError('Type mismatch');
		return Math.avg.apply (this, this);
	}
	
	Array.prototype.range = function () {
		if (!this.isXArray ("number"))  throw new TypeError('Type mismatch');
		return Math.range.apply (this, this);
	}
	
	Array.prototype.mode = function () {
				var arr = this; //[].slice.call(arguments);
				var obj = {};
				for(var i = 0; i < arr.length; i++) {
					if(obj[arr[i]] === undefined) obj[arr[i]] = 1;
					else obj[arr[i]]++;
				}
				
				var max = 0
				for (w in obj) 
				 if (obj[w] > max) max = obj[w];
				
				ret_val = [];
				for (w in obj) {
				  if (obj[w] == max) ret_val.push (w);	
				
				}
				
				return ret_val;
	}

	
	Number.prototype.abs = function() { return Math.abs (this.valueOf()); };
	Number.prototype.acos = function() { return Math.acos (this.valueOf()); };
	Number.prototype.acosh = function() { return Math.acoah (this.valueOf()); };
	Number.prototype.asin = function() { return Math.asin (this.valueOf()); };
	Number.prototype.asinh = function() { return Math.asinh (this.valueOf()); };
	Number.prototype.atan = function() { return Math.atan (this.valueOf()); };
	Number.prototype.atanh = function() { return Math.atanh (this.valueOf()); };
	Number.prototype.atan2 = function(x) { return Math.atan2 (this.valueOf(), x); };
	Number.prototype.cbrt = function() { return Math.cbrt (this.valueOf()); };	
	Number.prototype.ceil = function() { return Math.ceil (this.valueOf()); };
	Number.prototype.clz32 = function() { return Math.clz32 (this.valueOf()); };
	Number.prototype.cos = function() { return Math.cos (this.valueOf()); };
	Number.prototype.cosh = function() { return Math.cosh (this.valueOf()); };
	Number.prototype.exp = function() { return Math.exp (this.valueOf()); };
	Number.prototype.expm1 = function() { return Math.expm1 (this.valueOf()); };
	Number.prototype.factorial = function() { return Math.factorial (this.valueOf()); };
	Number.prototype.fibonacci = function() { return Math.fibonacci (this.valueOf()); };
	Number.prototype.floor = function() { return Math.floor (this.valueOf()); };
	Number.prototype.fround = function() { return Math.fround (this.valueOf()); };
	Number.prototype.imul = function() { return Math.imul (this.valueOf()); };
	Number.prototype.log10 = function() { return Math.log10 (this.valueOf()); };
	Number.prototype.log1p = function() { return Math.log1p (this.valueOf()); };
	Number.prototype.log2 = function() { return Math.log2 (this.valueOf()); };
	Number.prototype.pow = function(exp) { return Math.pow2 (this.valueOf(), exp); };
	Number.prototype.random = function() { return Math.random () * this.valueOf(); };
	Number.prototype.round = function() { return Math.round (this.valueOf()); };
	Number.prototype.sign = function() { return Math.sign (this.valueOf()); };
	Number.prototype.sin = function() { return Math.sin (this.valueOf()); };
	Number.prototype.sinh = function() { return Math.sinh (this.valueOf()); };
	Number.prototype.tan = function() { return Math.tan (this.valueOf()); };
	Number.prototype.tanh = function() { return Math.tanh (this.valueOf()); };
	Number.prototype.trunc = function() { return Math.trunc (this.valueOf()); };
	
	
	Number.prototype.degToRad = () => Math.PI * this.valueOf() / 180;
	Number.prototype.radToDeg = () => 180 * this.valueOf() / Math.PI;
	Number.prototype.cube = () => Math.pow(this.valueOf(),3);
	Number.prototype.square = () => Math.pow(this.valueOf(),2);

	
	Number.prototype.log = (B = Math.E) => Math.log (this.valueOf()) / Math.log (B); 
	Number.prototype.sqrt = (B = 2) => Math.pow(this.valueOf(), 1 / B); 
	
	class Stack extends Array {
		constructor() {
			super();
		}

		top() {
			return this[this.length - 1];
		}
		
		isEmpty () {
			if (this.length < 1) return true;
			return false;
		}
	}
