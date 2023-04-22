/*
Define an empty array. Also create two functions:

addNumber() reads a value from a text input field on the HTML document (id="num") and adds it at the end of the array.

printInfo() outputs the amount of elements in the array to the console, then the average of their values.

The HTML document has two buttons for calling the functions.


Example output:
The array has 10 elements.
The average of the values is 36.1
*/

// This code declares an empty array "numbers", defines a function "addNumber" that gets an input value from the DOM and adds it to the "numbers" array as a floating point number. 
//It also defines a function "printInfo" that calculates the sum and average of the numbers in the "numbers" array, logs the number of elements in the array and the average of the 
//values in the array, to the console.

let numbers = [];

		function addNumber() {
			const input = document.getElementById("num").value;
			numbers.push(parseFloat(input));
		}

		function printInfo() {
			const sum = numbers.reduce((a, b) => a + b, 0);
			const avg = sum / numbers.length;
			console.log("The array has " + numbers.length/2 + " elements.");
			console.log("The average of the values is " + avg.toFixed(1));
		}
