/*The HTML document has a button that calls the function addButton() upon being pressed. Said function has to create a new <button> element and append it to the <body> element. Pressing this new button has to call the function greet().

Creating a new element requires two statements. Some additional steps are also required.

document.createElement("[wanted_HTML_tag_here]"); creates the element, but does not yet add it into the document. Assign it to a variable so that you can edit it before appending it to the document.

By editing the element's .innerHTML with the assignment operator (=) text can be added to the button. The id value can also be altered this way. Set the button's id value to be "createdButton".

More complicated edits, such as adding an onclick-attribute, require using the method setAttribute(), for example: [element_name].setAttribute("[attribute]", "[attribute_value]").

Finally, document.[element_to_append_into].appendChild([element_being_added]); adds the created element to the end of the wanted element. Append doesn't overwrite any existing content, like the = operator does when editing innerHTML values.*/

function greet(){
 console.log("Hi there");
}
function addButton(){

 // Create a new button element and set its id value
  let newButton = document.createElement("button");
  newButton.id = "createdButton";
  
  // Set the button's innerHTML and onclick attribute
  newButton.innerHTML = "Click me!";
  newButton.setAttribute("onclick", "greet()");
  
  // Append the button to the body element
  document.body.appendChild(newButton);
};
