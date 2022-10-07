
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
