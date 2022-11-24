
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
/*
console.log("Please put numbers that add up to 360")//to show number
let num1 =Number(prompt("enter a number Please put numbers that add up to 360"));//to type first number
let num2 =Number(prompt("enter a number Please put numbers that add up to 360"));//to type second number
let num3 =Number(prompt("enter a number Please put numbers that add up to 360"));//to type third number
if(num1 != num2 && num1 != num3 && num2 != num3) {console.log("Isosceles");}
//if everything isnt eaqual to itself
else if (num1 == num2 && num2 == num3 && num1 == num3) {console.log("equatral");}
else if (num1 == num3 && num2 !== num1 && num2 !== num3) {console.log("Scalene");}
else if (num3 == num2 && num1 !==num3 && num1 !== num2) {console.log("Scalene");}
else if (num1 == num2 && num3 !==num2 && num3 !== num1) {console.log("Scalene");}
else {console.log("something went wrong")}
*/
//3.141592653589793

/*
let Num = Number(prompt("Enter number Between"));
let power = Number(prompt("Enter number Between"));
let counter = 9;
let temp =Num;
while(counter<power){
    temp=temp*Num
Num=Num*Num;
counter=counter+1;
}
console.log(temp)
*/

//3.141592653589793

// let rows = Number(prompt("Enter number Between"));

/*
let bb=10
let pp=1
for(;pp<=bb;pp=+2){
    console.log(pp)
}
*/

/*
let Num = Number(prompt("Enter number"));
let variable = 0;
while(Num > 0){
     Num = Math.floor(Num / 10);
    variable++;
}
  console.log(variable);
*/

/*
let num = 1234
last_diget = num%10;
num=Math.floor(num/10);
console.log(num);

*/


/*
const num1 = prompt('Enter a first positive integer: ');
const num2 = prompt('Enter a second positive integer: ');
let min = (num1 > num2) ? num1 : num2;
while (true) {
    if (min % num1 == 0 && min % num2 == 0) {
        console.log(min);
        break;
    }
    min++;
}
*/

// program to check an Armstrong number of three digits

/*
let sum = 0;
const number = prompt('Enter a three-digit positive integer: ');
let temp = number;
while (temp > 0) {
    let remainder = temp % 10;
    sum += remainder * remainder * remainder;
    temp = parseInt(temp / 10); 
}
if (sum == number) {
    console.log(`${number} is an Armstrong number`);
}
else {
    console.log(`${number} is not an Armstrong number.`);
}
*/


//5! = 5*4*3*2*1

/*
let a = 5;
temp =1;
let total =0


 number = prompt('Enter a three-digit positive integer: ');
while (number>0) {
    let remainder = number % 10;
    for(let i=remainder;i>0;i--)
{
temp = temp *i;
}
total=total+temp;
    number = Math.floor(number / 10);
 } console.log(total);
 */

/*
number = prompt('Enter a three-digit positive integer: ');
let number1 =2
reverse = 0;
*/

/*
// Square star pattern  in JavaScript
 numberSquare = prompt('Enter a One-digit positive integer: ');
 stringSquare = '';
for(let i=1; i<=numberSquare; i++){
  for(let j=1; j<=numberSquare; j++){
    stringSquare += '*';
  }
  stringSquare += '\n';
}
console.log(stringSquare);
//console.log(stringSquare);
*/

/*
// rectangle star pattern  in JavaScript
numberSquare = prompt('Enter a One-digit positive integer: ');
rowsSquare = prompt('Enter a One-digit positive integer: ');
stringSquare = '';
for(let i=1; i<=numberSquare; i++){
 for(let j=1; j<=rowsSquare; j++){
   stringSquare += '*';
 }
 stringSquare += '\n';
}
console.log(stringSquare);
*/

/*
// Hollow Square star pattern  in JavaScript
numberSquare = prompt('Enter a One-digit positive integer: ')-1;
stringSquare ='';

for(let i=1; i<=numberSquare; i++){
 for(let j=1; j<=numberSquare; j++){
    if(i==1 || i==2 &&j==1 ||j==1){
   stringSquare += '*'; 
    }
    else{stringSquare +=' '};
 }
 stringSquare +='*';
 stringSquare +='\n';
}
for(let e=1; e<=numberSquare; e++){
    for(let p=0; p<=numberSquare; p++){
       if(e==1 || e==1){
      stringSquare += '*'; 
       }
       else{stringSquare +=' '};
    }
    stringSquare +=' ';
    stringSquare +='\n';
   }
console.log(stringSquare);
//console.log(stringSquare);
*/


//hollow //crossed// star patern in javascript
numberSquare = prompt('Enter a One-digit positive integer: ')-1;
stringSquare ='';

for(let i=1; i<=numberSquare; i++){
 for(let j=1; j<=numberSquare; j++){
    if(i==1 || i==2 &&j==1 ||j==1){
   stringSquare += '*'; 
    }
    else{stringSquare +=' '};
 }
 stringSquare +='*';
 stringSquare +='\n';
}
for(let e=1; e<=numberSquare; e++){
    for(let p=0; p<=numberSquare; p++){
       if(e==1 || e==1){
      stringSquare += '*'; 
       }
       else{stringSquare +=' '};
    }
    stringSquare +=' ';
    stringSquare +='\n';
   }
console.log(stringSquare);
//console.log(stringSquare);

//Hollow Crossed Square Star Pattern



document.write("<pre>")

numberSquare = Number(prompt('Enter a One-digit positive integer: '));


//I=rows J=columns
for(let i=1; i<=numberSquare; i++)
{
    for(let j=1; j<=numberSquare; j++)
    {
        if(i==1 || i==numberSquare ||i==j)

        {
        document.write("*");
        }
        else
        {
        document.write(" ");
        }
    }
    document.write("<br>")
}
    document.write("</pre>")










