/*
Git command to push to code 

*/

console.log("Phase 1: Initialization");
// Variables and data types
let age=25; // Number
const name="Harish Kumar Gupta"; // String
var oldway="avoid" // old way, use let or const instead
// Data types
const string ="Sunil Kumar Gupta"; // String
const number=20; // Number
const boolean=true; // Boolean
const array=[1,2,3,4,5]; // Array
const object={name:"harish",age:23}; // Object
const nullValue=null; // Null
const underdefinedvalue=undefined; // Undefined
// type checking 
console.log(typeof string); // string
console.log(typeof number); // number

// Functions

function hello(name){
   // return `Hello, ${name}`;
    return `Welcome to JavaScript! ${name}`;
}
console.log(hello("HKG")); // Hello, Harish

function greet(name){
    return "Hello," + name;
}
console.log(greet("Harish")); // Hello, Harish
// Arrow function
const greetArrow=(name)=>{
    return `Hello, ${name}`;
}
console.log(greetArrow("Harish")); // Hello, Harish

// shothand arrow function
const greetshort=(name1)=>`Hello,${name1}`;
console.log(greetshort("Harish Kumar Gupta")); // Hello, Harish Kumar Gupta

const greetwithdefault=(name3= "Guest")=>`Hello,${name3}`;
console.log(greetwithdefault()); // Hello, Guest
