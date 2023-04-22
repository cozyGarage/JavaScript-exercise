/*The HTML page has a <p> element with the id "text". Edit its content between the console.log() functions to match the example.

<body>
    <p id="text">Edit me!</p>
</body>

Example output:
Edit me!
JavaScript is easy and fun!*/

function edit(){
console.log(document.getElementbyId("text").innerHTML);
  text.textContent = "JavaScript is easy and fun!"; // update the text content of the <p> element
console.log(document.getElementbyId("text").innerHTML);  
}
