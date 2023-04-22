/*A function call can be assigned to a HTML button's onclick-attribute. In this exercise we have a button with the attribute onclick="calcSquare()".

The page also has a text input field (<input type="text">) and a button. Clicking the button will call the function calcSquare(), which fetches the value in the input field, calculates its square, and prints it below the text input field in the form "The square of X is Y". The input field's id is "num" and the result is shown in an element with the id "result".

Write the function in question. Calling the function is done automatically by the test.*/

 function calcSquare() {
            const num = document.getElementById("num").value;
            const square = num * num;
            const result = document.getElementById("result");
            result.innerHTML = `The square of ${num} is ${square}`;
        }
   
