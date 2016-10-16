addEventListener('load', function () {
	var puns = [
		// Put your puns as strings in this array
		'example',
		'example two'
	];

	var now = new Date();

	document.body.innerHTML = puns[
		// Math.random() is seedable because seedrandom was loaded
		Math.floor(Math.random(Math.sqrt(now.getDate())) * puns.length)
	];
});
