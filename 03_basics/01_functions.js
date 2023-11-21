//function definition
function sayMyName(){
    console.log("palak")
}
//function execution "sayMyName" is reference of the function
sayMyName();
function add(num1,num2){
    console.log(num1+num2)
}
//add(3,4)//7
//let result=add(3,4)//if we log result it will give undefined
//console.log(result)
function addition(num1,num2){
    let res=num1+num2;
    return res;
}
let ans=addition(3,4)
console.log(ans)

function loginUserMessage(username="user"){//we are giving a default value to username so if no value is passed as arguments this could be used
    return `${username} just logged in`
        
}
//console.log(loginUserMessage())
//console.log(loginUserMessage("palak"))

//REST OPERATOR
function display(val1,...num){//rest operator and spread operator and represented in the same way(...) their use depends on the usecase 
    console.log(val1)
    console.log(num)
}
//display(1,2,3,4,5)//1 [2,3,4,5]

//passing object as argument
const obj={
    name:"palak",
    age:24,
    city:"pune"

}
function details(anyobj){
    console.log(`${anyobj.name} lives in ${anyobj.city}`)
}
//details(obj)

//passing array as argument
let arr=[1,3,4,5,6]
function printarr(anarr){
    console.log(anarr[0])
}
printarr(arr)


