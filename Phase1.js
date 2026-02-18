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
// Filter- filter elements based on condition get more than one element
const evens=numbers.filter(num=>num%2==0);
console.log(evens); // [2, 4, 56]
 // Find- find first element that matches condition
 const found=numbers.find(num=>num>4);
 console.log(found); // 5
// reduce- reduce array to single value
const sum=numbers.reduce((additional,num)=>additional+num,0);
console.log(sum); // 71
// foreach- iterate over array
numbers.forEach(num=>{
    console.log(num); // 1 2 3 4 5 56
});
numbers.push(100); // add element to end
console.log(numbers); // [1, 2, 3, 4, 5, 56, 100]
numbers.pop(); // remove last element
console.log(numbers); // [1, 2, 3, 4, 5, 56]
numbers.includes(3); // check if element exists
console.log(numbers.includes(3)); // true
// Objects and Object Manipulation
// object creation 
const user={
name:"Hairsh",
age:23,
greet:function(){
    return `Hello, I am ${this.name}`;
    return `Hello, I am ${this.age}`;
}
};
console.log(user.greet(name)); // Hello, I am Harish
console.log(user['age']);
// adding new property
user.address="India";
console.log(user.address);
// deleting property
delete user.age;
console.log(user.age); // undefined
// object destructuring
const { name: userName, address } = user;
console.log(address); // Harish

// Conditional Statements
let username="";
if(!username){
    console.log("username is required"); // username is required
}
let reqbody="";
if(!reqbody){
    console.log("Rquest body is required"); // Request body is required
}
/*
let email= req.body.email;
if(!email){
    return res.status(400).json({error:"Email is required "}); // Email is required
}
    */

// Loops For loop
for(let i=0;i<5;i++){
    console.log(i); // 0 1 2 3 4
}
// While loop
let j=0;
while(j<3){
    console.log(j);
    j++;
}
// Do-while loop
let k=0;
do{
    console.log(k);
    k++;
}
while(k<10);

// 
