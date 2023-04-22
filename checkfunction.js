/*
Write the three functions used in the exercise: checkFunc(), combineFunc() ja sumFunc(). Deduct how they are used and what they're used for based on the existing code, their names, and the example output.

Note! The function isNaN(value) is good for finding out which arrays have numbers and which have strings.


Example output:
Array has strings. Combining words:
The elements of this array form a sentence 
Array has only numbers. Calculating sum:
143
Array has strings. Combining words:
5 times 3 is 15 */

function checkFunc(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
      return false;
    }
  }
  return true;
}
function combineFunc(arr) {
	console.log ("Array has strings. Combining words:")
  return arr.join(' ') + ' ';
}

function sumFunc(arr) {
	console.log ("Array has only numbers. Calculating sum:")
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
      sum += arr[i];
    }
  }
  return sum;
}
var arrayl = ["The", "elements", "of", "this array", "form", "a sentence"];
var array2 = [3, 5, 7, 8, 9, 11, 13, 15, 16, 17, 19, 20];
var array3 = (5, "times", 3, "is", 15];
function someFunction(arr, f1, f2, f3) {
if (!fl (arr)) {
  
console.log (f2(arr));
}
else { 
  console. log ( f3 (arr)) ;
}
}
someFunction (arrayl, checkFunc, combineFunc, sumFunc); 
someFunction (array2, checkFunc, combineFunc, sumFunc); 
someFunction (array3, checkFunc, combineFunc, sumFunc);
