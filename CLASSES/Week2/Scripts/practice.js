/// 1. Create a variable label and assign it the value "keyincollege". Create another variable tld and assign it "ca". Create a third variable domainName that combines label and tld to produce the value "keyincollege.ca".
var tid = "ca";
var dominName = label + "." + tld

/// 2. Create a variable isKeyin and assign it a boolean value (true or false) depending on whether or not domainName is equal to "keyincollege.ca". HINT: use === and don’t write true or false directly.
var iskeyin
if(dominName==="keyincollege.ca")
    iskeyin = true;
else
iskeyin = false;

/// 3. Create a variable isNotKeyin and assign it the inverse boolean value of isKeyin. HINT: if isKeyin is true, isNotKeyin should be false.
var isnotkeyin
if (iskeyin === true) {
    isnotkeyin = false;
} else {
    isnotkeyin = true;
}

/// 4. Create four variables byte1, byte2, byte3, byte4, and assign each of these a value in the range 0-255.[You can assign any random numbers to each byteN variable, like 198 or 110 or 1 or any number in the range of 0-255.
var byte1 = 147
var byte2 = 64
var byte3 = 3
var byte4 = 3

/// 5. Create a variable ipAddress and assign it the value of combining your four byteN variables together, separated by ".". For example: "192.168.2.1".
var ipAddress = byte1 + "." + byte2 + "." + byte3 + "." + byte4;
console.log(ipAddress);

/// 6. Write code to display the multiplication table of a given integer. Define any variable and assign it a value, like in following example: your number is 15.
var table = 15;
console.log("Multiplication table of " + table + ":");

for (var i = 1; i <= 10; i++) {
    var result = table * i;
    console.log(table + " X " + i + " = " + result);
}

/// 7. Write code to display all even and odd numbers from first 100 numbers by using for loop and if condition.
console.log("Even numbers from 1 to 100:");
for (var i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

console.log("Odd numbers from 1 to 100:");
for (var j = 1; j <= 100; j++) {
    if (j % 2 !== 0) {
        console.log(j);
    }
}

/// 8. By using the same concept of above question no.7, display the sum of all even numbers from 100 numbers.
var sum = 0;
for (var i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}
console.log("Sum of all even numbers from 1 to 100: " + sum);


/// 9. Write code to check whether a given number is “perfect number” or not. You can again just define a variable and apply logic to check it.

var number = 28; // Change this to the number you want to check

var sumOfDivisors = 0;


for (var i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
        sumOfDivisors += i;
    }
}

if (sumOfDivisors === number) {
    console.log(number + " is a perfect number.");
} else {
    console.log(number + " is not a perfect number.");
}


/// 10. Write a program to determine whether a given number is prime or not

function isPrime(num) {
    
    if (num < 2) {
        return false;
    }
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // If divisible, not prime
        }
    }
    return true; // If not divisible by any number is prime
}


const number = 22; // Change this number to test different values
if (isPrime(number)) {
    console.log(number + ' is a prime number.');
} else {
    console.log(number + ' is not a prime number.');
}