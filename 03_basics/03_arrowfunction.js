//this keyword - this keyword is used to get reference of the current context -- this keyword acts differently
//in different scenarios- in function ,in arrow function, in object , in global scope

//this keyword in object

const obj={
    username:"palak",
    price:"999",
    subject:"js",
    func:function(){
        console.log(`${this.username} welcome to website`)//here this gives reference to current context 
    }
}
// obj.func();
// obj.username="Aditi"
// obj.func()

//this keyword in global scope
//console.log(this)//this will give empty object {} if we do this same in browser we will get window because window is global object for a browser

//this keyword in a function
let chai=function(){
    let username="palak"
    console.log(this) //this will give a lot of data
    console.log(this.username)//this will return undefined
}
//chai()

//ARROW FUNCTION

const arfunc=()=>{
    console.log("Welcome to arrow funciton")
}
//arfunc()

//this keyword in arrow function
const arthis=()=>{
    console.log(this)
}
//arthis()       //again we will get an empty object{} thus we donnt use this keyword in arrow function

///EXPLICIT RETURN IN ARROW FUNCITON
let addone=(num1,num2)=>{  //here we use {} and return keyword to return a value
    return num1+num2
}
//addone(1,2)



//IMPLICIT RETURN IN ARROW FUNCTION
let addtwo=(num1,num2)=> num1+num2 //we can return like this as well without using return keyword
console.log(addtwo(1,3))

//ANOTHER WAY OF IMPLICIT RETURN
let addthree=(num1,num2)=>(num1+num2)//this(using paranthesis) will also work but if we use{} then return in necessary
 
//RETURNING OBJECT FROM ARROW FUNCTION
let arr=()=>({name:"palak"})//we have to wrap our object in () otherwise we will get "undefined"