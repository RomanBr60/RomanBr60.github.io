Math.sinc = Math.sinc || function(x) {
	return (x == 0) ? 1 : Math.sin(Math.PI * x) / (Math.PI * x);
}

Math.circle = Math.circle || function(x) {
	return (x > -1 && x < 1) ? Math.sqrt(1 - x * x) : 0;
}

Math.triangle = Math.triangle || function(x) {
	return Math.max(0, 1 - Math.abs(x));
}

Math.sawtooth = Math.sawtooth || function(x) {
	return x - Math.floor(x);
}

Math.gaussian = Math.gaussian || function(x) {
	return Math.exp(-x * x);
}

Math.spike = Math.spike || function(x) {
	return x == 0;
}

Math.box = Math.box || function(x) {
	return (x > -1 && x < 1);
}