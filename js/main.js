addEventListener('load', function () {
	var puns = [
		// Put your puns as strings in this array
		"What do you call it when you cut yourself on tushar? Tusharp.",
		"What do you call it when tushar has more than one vehicle, but less than three? Tucar.",
		"What do you call it when tushar gets a good score in golf multiple times? Tupar.",
		"What do you call it when tushar opens multiple pubs? Tubar.",
		"What do you call it when tushar has multiple containers? Tujar.",
		"What do you call it when tushar makes an incredibly offensive joke? Tufar."
	];

	var now = new Date();

	document.body.innerHTML = puns[
		// Math.random() is seedable because seedrandom was loaded
		Math.floor(Math.random(Math.sqrt(now.getDate())) * puns.length)
	];
});
