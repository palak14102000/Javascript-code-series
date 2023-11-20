//--Datatypes are devided into two categories based on how data is kept in the memory and how is it accessed

// 1.) Primitive- call by value ( when we try to copy it from somewhere then we dont get the original referece
//instead we get the copy of it) there are 7 types of primitive data types
//  -String , number, Boolean, null, undefined, symbol, bigInt
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456543576654356754n


// 2.) Reference (Non primitive ) - Array, Objects, Functions
//* javascript is a dynamically-typed language - variables are assigned a data type at run time based on their values
//datatype of all the non primitive datatypes are objects
const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);