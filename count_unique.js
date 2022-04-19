outlets = 2;
setoutletassist(0, "bee1 count");
setoutletassist(1, "bee2 count");

function count() {
	var bee1Count = 0;
	var bee2Count = 0;
	for (i = 0; i < arguments.length; i++) {
		var currBee = arguments[i].substring(0, 4);
		if (currBee === "bee1") {
			bee1Count = bee1Count + 1;
		} else if (currBee === "bee2") {
			bee2Count = bee2Count + 1;
		}
	}
	outlet(0, bee1Count);
	outlet(1, bee2Count);
}