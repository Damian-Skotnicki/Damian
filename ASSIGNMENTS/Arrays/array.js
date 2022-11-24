
/*
let myArray = new Array("apples","oranges");
let myArray2 = ["apples","oranges"]
document.write(myArray2[0]); 
document.write(myArray2[1]); 
myArray2[0]= "Lemmon";
document.write(myArray2[0])
document.write("<br>"); 
document.write(myArray2);
myArray2[10]="test";
document.write(myArray2);
myArray2.push("Lime")
myArray2.pop(); 
let myArray3 = new Array();
*/

/*
let myArray4 = [];
for(let i=0; i<10; i++){
    myArray4[i]=i;
}
document.write("<br>");
document.write(myArray4);
document.write("<br/>");
document.write(myArray4.length);
document.write("<br/>");
document.write("<br/>");
*/

/*
let myArray5=[-1,3,-8,5,-4,-6,2,7,-10,10,-21,8];
for(let i=0; i<myArray5.length; i++){
    if(myArray5[i]<0){
        document.write(myArray5[i])
        document.write(",") 
        document.write("<br>");
    }
}
*/

/*
let total = 0;
let myArray5=[1,-3,8,5,4,-6,2,7,10,-10,1,-4,1,-5,8,2,4,-6,2,7,1,-1,11,-8];
for(let i=0; i<myArray5.length; i++){
    total = total + myArray5[i]
}
document.write(total)
*/

/*
let myArray6=[7,23,2,4,6];
let max =myArray6[0]
let min =myArray6[0]
for(let j=0; j<myArray6.length; j++){
if (max<myArray6[j])
    max = myArray6[j]
}
for(let b=0; b<myArray6.length; b++){
if (min>myArray6[b])
min = myArray6[b]
}
document.write(max)
document.write("<br>");
document.write(min)
*/


/*
//SECOND LAST IN ARRAY
let myArray7=[7,23,2,4,6,17,9,8,1,3,8,19,5];//19
let max1 = myArray7[0]
let max2 = myArray7[0]
for(let z=0; z<myArray7.length; z++){
if (max1<myArray7[z])
    max2 = myArray7[z]}
document.write(max2)

   // document.write("<br>")
  //  document.write(max1)
*/

//odd or even
/*
let myArray8=[1,2,3,4,5,6,7,8,9,10,0];
let odd = 0
let even = 0
for(let n=0; n<myArray8.length; n++){
if (myArray8[n] % 2 == 0){even=even+1}
else{odd=odd+1}
}
document.write("Their is ")
document.write(odd)
document.write(" Odd numbers")
document.write("<br>")
document.write(" Their is ")
document.write(even)
document.write(" Even Numbers ")
*/

// coppy an array to another
let Array1=[1,2,3,4,5,6,7,8,9,10,0];
let Array2=[];
for(let h=0; h<Array1.length; h++){
Array2[h]=Array1[h]
}
document.write(Array1);
document.write("<br>");
document.write(Array2);

/*
document.write(myArray1.length);
document.write("<br>");
document.write(myArray2.length);
document.write("<br>");
document.write(myArray1);
document.write("<br>");
document.write(myArray2);
*/

// coppy last elemeny
document.write("<br>");
document.write("<br>");
let Array3=[1,2,3,4,5,6,7,8,9,10,0];
let Array4=[];
for(let m=0; m<Array3.length; m++){
Array4[0]=Array3[m]
}
document.write(Array3);
document.write("<br>");
document.write(Array4);

//DELETE FIRST

document.write("<br>");
document.write("<br>");
let Array5=[1,2,3,4,5,6,7,8,9,10,0];
let Array6=[];
for(let m=0; m<Array5.length; m++){
Array6[0]=Array5[m]
}
document.write(Array3);
document.write("<br>");
document.write(Array4); 