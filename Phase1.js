/*
 # Git command to push to code 
1. git add . (to stage all changes)
2. git commit -m "Your commit message" (to commit the changes)
3. git push origin main (to push to the main branch)

# To Remove old commit message and add a new one
1. rm filename.js (to remove the file)
2. git add . (to stage the changes) 
3.git rm filename.js (to remove the file from staging area)
4. git commit -m "Your new commit message" (to commit the changes with new message)
5. git push origin main (to push the changes to the main branch)

# To Update the existing commit message
1. git commit --amend -m "Your new commit message" (to update the last commit message)
2. git push origin main --force (to push the changes to the main branch, use --force to overwrite the history)

Real Projects:
Create branch
→ Code
→ Commit
→ Push branch
→ Create Pull Request
→ Merge to main
→ Pull latest changes

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

// Arrays and Arrays methods
const numbers=[1,2,3,4,5,56];
// Map- transform each element
 const doubled=numbers.map(num=>num*3);
 console.log(doubled); // [3, 6, 9, 12, 15, 168]

const evens=numbers.filter(num=>num%2==0);
console.log(evens); // [2, 4, 56]

