
//single line text (invisable)
console.log("hello") 
/* multi 
line text (invisable)
*/

//and = &&

//Variables
var X= 3;
let Y= 4;

//Subtraction
console.log(4-4);

//addition
console.log(4+4);

//multiplication
console.log(4*4);

//to the power
console.log(4**4);

//division
console.log(8/4);

//equals
console.log(4==4);
//true

//Not equals
console.log(4!==4);
//false

//greater than
console.log(5>6);

//less than
console.log(5<6);

//greater than or equal
console.log(6 >=6);

//less than or equal
console.log(2<= 1);


/* assighments */

//Add and assignment
let A= 12;
A +=12; 
console.log(A);

//subtract and assignment
let B= 12;
B -=12; 
console.log(B);

//multiply and assignment
let C= 12;
C *=12; 
console.log(C);

//divide and assignment
let D= 12;
D /=12; 
console.log(D);

//modulus and assignment
let E= 12;
E %= 12;
console.log(E);


//Condition opertator?
let First= 10;
let Second= 12;
console.log(First>Second?"True":"False");

// typeof operator (tells if number or string)
let myString = "hello";
console.log(typeof(myString));

let myNumber = 12;
console.log(typeof(myNumber));

//user imput @
/*
let MySecondSting =prompt("Enter something");
console.log(MySecondSting);

let MySecondNumber =Number(prompt("enter a number"));
console.log(MySecondNumber);
*/

//if statement
let myage = 400
//true
if(myage > 500){ 
    console.log("you are over 500 years old")  }
    else{ console.log("you are NOT over 500 years old") }
//false
if(myage < 500){ 
    console.log("you are over 500 years old")  }
    else{ console.log("you are NOT over 500 years old") }

 // if else-if else statement
 if(myage > 500){ 
     console.log("you are over 500 years old") 
     } else if(myage<500){ console.log("you are less over 500 years old") 
     } else{ console.log("you are Must over 500 years old") }
    
//logical operators (test for true and false conditions)


//logical and (&&) returns true if both operands are true

aTest = true;
let bTest = true;
console.log(aTest && bTest); //will print to true in console (as both a and b are true)

cTest = false 
console.log(cTest && aTest) //will print false in console (as a and be are)

let Anumber = 10;
let Bnumber = 20;
if( (Anumber >5) && (Bnumber > 15)){
console.log("first is greater than 5 and second than 15")}
else{console.log("One of the expresions failed the test")}
/* if(Anumber >Bnumber){
    console.log("line 1: first is lesser");
    console.log("line2: fist is lesser")}
    */
   
//logical or (||) if rither a or b is true its is all true
t =true
f =false
console.log(t || f);
//logical not (!) reverses the results if true becomes false if false becomes true
console.log(!(t));

//swich statement
let myvar = 'A'
switch (myvar) {
    case 'A':
        console.log("you got an A")
        break;
        case 'b':
        console.log("you got an B")
        break;
    default:
        console.log("Grade not recognised")
}

//while loop 

let count=0
while(count<10){
    console.log(count);
    count++; //count = count+1
}
//do while loop

do { 
    console.log(count);
    count++;
}while(count<20);

//for loops 
/*

for (iniciation;test condition; increment statement){

    code here will run in the test condition is true

}

initilization:this step executes first. it only extcutes once you can declare
and initialize a loop control variable here it is optional but 
you must put in a semi-colon at the end;

test condition if the condition is true the block of code executes otherwise it dose not 

increment statement after the body of loop executes control goes to the increment ]
whitch allows you to update any controll variable values this statement
 is optional but a semi colon MUST be at the end

 example
 */
for(let i=0; i<2; i++){
    console.log("hello",i);

}
//we get the same output from this
let j=0;
for(;j<2;j++){
    console.log("hello",j);
}
//we get the same output from this
let k=0;
for(;k<2;){
    console.log("hello",k)
    k++
}
//inifinte loop Dount run this 

/*
for(;;){

}
*/

//break statement
let h = 0;
document.write("Entering loop:<br>")
while(h<20){
    h=h+1;
    if (h ==5){
        break;
    }
    document.write(h+"<br>");
}
document.write("leaving loop:<br>")


//continue statement
let h2 = 0;
document.write("Entering loop:<br>")
while(h2<20){
    h2=h2+1;
    if (h2 ==5){
        continue;
    }
    document.write(h2+"<br>");
}
document.write("leaving loop:<br>")

//Arrays
/*
(object) Stores multiple values in a single variable
it stores a fixed size sequence collection of elements
of the same or mixed type 
*/
//to create an array

let myArray = new Array("apples","oranges");
let myArray2 = ["apples","oranges"]
 
/*
to access elements of any array we use indexing
indexing is when you type the array name followed
by square brackets.the number you put between
the square brackets is the number of the elements 
in the array you wish to acces

all arrays start with index vallue 0
*/
document.write(myArray2[0]); //this print apples 
document.write(myArray2[1]); //this print oranges 

// to change an array ellement 
// use indexing to locate the ellement and then
//an assignment operation to assign a new value
myArray2[0]= "Lemmon";
document.write(myArray2[0])
document.write("<br>"); 
//verry important!
document.write(myArray2);
myArray2[10]="test";
document.write(myArray2);

//to add elements to an array you can use the 
//push command they will be pushed on to the
//end of the array
//end of the array
myArray2.push("Lime")
//to remove the last element from an array you 
//can use the pop command
myArray2.pop(); //this removes the last elements
//to create an epty array you can use
//the new array()command or pair of empty
//square brackets
let myArray3 = new Array();
let myArray4 = [];

//TO use a for loop to access the array ellements
//to add elements using a for loop
for(let af=0; af<10; af++){
    myArray4[af]=af;
}
document.write("<br>");
document.write(myArray4);
document.write("<br/>");
document.write(myArray4.length);

