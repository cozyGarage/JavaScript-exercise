/*Checking-an-interger-value

The webpage is asking for the user's age. The input value has already been fetched, but you have to fill in the missing code. 
When the page calls the function checkAge(), first print in the console "The input age: [age]", followed by one of the following, depending on the value:

18 years or more: "The user is an adult."

Under 18 years, but over 0 years: "The user is not yet an adult."

Otherwise: "Invalid input!"*/

``` js
function checkAge(){
var age = document.getElementbyId("age").value;
console.log("Input age:", age);
	if(age>=18) console.log("The user is an adult."); else if(age<18&&age>0)
		console.log("The user is not yet an adult."); else
		console.log("Invalid input!");
    }
```
