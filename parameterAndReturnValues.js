/*
Fill in the missing functions fetchValue(id) and calcPower(base, exponent). The function fetchValue(id) looks for a HTML text input element and returns its value. The function calcPower(base, exponent) has to calculate and return a number based on the values passed to it. Note that all of the printing happens within the pre-made section of the program.

Tip: If the exponent is 0, the result is always 1, regardless of the base number. If the exponent is negative, the result is 1 / (base^exponent). For example:

2^(-4) = 1 / (2^4) = 1 / 2 / 2 / 2 / 2.

Also keep in mind, that upon encountering a return statement, the program leaves the function immediately.
*/

// Define a function to calculate the power of a number based on the given base and exponent.
function calcPower(base, exponent) {
	// If the exponent is 0, the result is always 1.
	if (exponent === 0) {
		return 1;
	}
	// If the exponent is negative, calculate the reciprocal of the result of raising the base to the positive exponent.
	else if (exponent < 0) {
		return 1 / Math.pow(base, -exponent);
	}
	// If the exponent is positive, raise the base to the exponent.
	else {
		return Math.pow(base, exponent);
	}
}

// Define a function to fetch the value of an input element by its ID.
function fetchValue(id) {
	return document.getElementById(id).value;
}

// Define a function to calculate and display the result of raising the base to the exponent when the "Calculate" button is clicked.
function calculate() {
	// Get the values of the base and exponent input elements.
	var base = fetchValue("base");
	var exponent = fetchValue("exponent");

	// Calculate the result of raising the base to the exponent.
	var result = calcPower(base, exponent);

	// Display the result in an HTML element with the ID "result".
	document.getElementById("result").innerHTML = "The number " + base + " to the power of " + exponent + " is: <br>" + result;
}

// Call the calculate function when the page has finished loading.
window.onload = function () {
	document.getElementById("calculateButton").onclick = calculate;
};
