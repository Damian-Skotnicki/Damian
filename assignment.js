
//ASSIGNMENT1
/*
const number = prompt("Enter a number: ");
if(number % 2 == 0) {console.log("The number is even.");}
else {console.log("The number is odd.");}
*/


//ASSIGNMENT2
/*
const num1 = parseFloat(prompt("Enter first number: "));
const num2 = parseFloat(prompt("Enter second number: "));
let largest;
if(num1 >= num2 && num1) 
{largest = num1;}
else if (num2 >= num1 && num2) {largest = num2;}
else if (num2 = num1) {largest = num1 ;}
console.log("The largest number is " + largest);
*/


//ASSIGNMENT3
/*
const num1 = parseFloat(prompt("Enter first number: "));
const num2 = parseFloat(prompt("Enter second number: "));
const num3 = parseFloat(prompt("Enter third number: "));
let largest;
if(num1 >= num2 && num1 >= num3) {largest = num1;}
else if (num2 >= num1 && num2 >= num3) {largest = num2;}
else {largest = num3;}
console.log("The largest number is " + largest);
*/

//ASSIGNMENT4 triangles
const num1 = parseFloat(prompt("Enter first number: "));
const num2 = parseFloat(prompt("Enter second number: "));
const num3 = parseFloat(prompt("Enter third number: "));
if(num1 > num2 && num1 > num3) {console.log("Isosceles");}
else if (num2 = num1 < num3) {console.log("Scalene");}
else if (num1 = num2 = num3) {console.log("Equilateral");}