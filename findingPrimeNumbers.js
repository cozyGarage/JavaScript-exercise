/*Create a program that proceeds through the numbers between 1 and 60, printing only the prime numbers. 
A prime number is a number that only gets an integer as a quotient when divided with 1 or itself. 
At the end, also print the total amount of prime numbers found.

For example, 7 is a prime number, because only 7/1 = 7 and 7/7=1 are prime numbers. 
The number 8, however, is not a prime number, as it can be divided with the numbers 2 and 4. 
The same goes for 9, as it can be divided with 3. To find out whether a number is a prime number or not, it has to be divided with all integers from 2 upwards until the number itself. 
This can be done using a loop within a loop.

Define the variable for counting the total amount of prime numbers at the very beginning of the code. Changes made to it are permanent, even if they were made within a code block, 
and the variable would then be accessed outside of it later.*/

let count = 0; // initialize counter for prime numbers

for (let i = 2; i <= 60; i++) { // iterate through all numbers between 1 and 60
  let isPrime = true; // assume number is prime initially
  
  for (let j = 2; j < i; j++) { // iterate through all numbers between 2 and i-1
    if (i % j === 0) { // if i is divisible by j, then i is not a prime number
      isPrime = false; // update isPrime flag to false
      break; // break out of inner loop early
    }
  }
  
  if (isPrime) { // if isPrime flag is still true, then i is a prime number
    console.log(i); // print i to console
    count++; // increment counter for prime numbers
  }
}

console.log(`Total of prime numbers found: ${count}`); // print total count of prime numbers
