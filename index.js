// console.log("Hello world");

// var x=5,y=9;
// var sum=x+y;
// var mult=x*y;
// var sub=x-y;
// var div=x/y;
// console.log(sum,mult,sub,div);

{
    var z=5;
    let w=4;
}

// console.log(z);
var x=4;
var y=3;

//Assignment Operators

x+=5;   //x=x+5
y*=10;  //y=y*10
console.log(x,y);

// //Logical Operators always give 0 or 1.

var logc=(x <=y);
console.log(logc); //Ans:-false

//Conditions (if,else);
if(x>y){
    console.log("Hello");
}else{
    console.log("World");
}


// // Javascript Functions

function Hello(x,y){
    return x+y;
}
const sum1=Hello(2,3);
console.log(sum1);

// //Javascript Objects
const obj={
    name:"Johnson",  //name=key ,johnson=pair
    age:14,
    gender:"male",
    hobby:"Play cricket"
}
console.log(obj);
console.log(obj.name);


// //String Methods

let str="HelloWorld";
let strUpper=str.toUpperCase();
console.log(strUpper);
let strLower=str.toLowerCase();
console.log(strLower);
let str1="Hello",str2="World";
let str3=str1.concat(str2);
console.log(str3);
let str4="         Hello world         ";
let str5=str4.trim();
console.log(str5);



// //Javascript Arrays
const fruits=["Apple","banana","orange","paapya","grapes"];
// console.log(fruits[0],fruits[1]);
// // fruits.pop();
// // console.log(fruits);
// fruits.push("pineapple");
// // console.log(fruits);
// fruits.shift();
// // console.log(fruits);
// fruits.unshift("apple");
// // console.log(fruits);
// console.log(fruits.length);



// // Javascript Array Iterations
// fruits.forEach(function(i){
//     console.log(i);
// })
fruits.map(function(fruit){
    console.log(fruit);
})


// //Javascript Loops

// for(i=0;i<fruits.length;i++){
//     console.log(fruits[i]);
// }

// for(x in obj){
//     console.log(obj[x]);
// }
// for(x of fruits){
//     console.log(x);
// }

// i=0;
// while(i<fruits.length){
//   console.log(fruits[i]);
//   i++;
// }