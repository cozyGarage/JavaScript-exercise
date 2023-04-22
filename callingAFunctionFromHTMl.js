/*The HTML page contains an element with the id "number". The page calls a function calcSquare(), which has to fetch the value of the element, calculate its square (power of two), and print it in the console like so: "The square of X is Y". Write this function. The HTML page in question will load your code, so you can refer to the page with the document keyword.

<body>
    <p id="number">0</p>
    <button id="button1" onclick="calcSquare()">Click here!</button>
</body>*/

function calcSquare() {
  let numberElement = document.getElementById("number"); // get the element with the id "number"
  let number = parseInt(numberElement.textContent); // get the number value and parse it as an integer
  let square = number ** 2; // calculate the square of the number
  console.log(`The square of ${number} is ${square}`); // print the result to the console
}
