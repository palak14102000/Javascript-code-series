//IIFE - immedietly invoked function expression
//this is used when we want to execute a function immidietly - we do this to save our function from the pollution of global scope variables and all
//we wrap our function inside () and then call it immidetly using ()

(function chai(){
    //unnamed iffe
    console.log("DB connected")
})();// if we dont use this ; then the below function might now execute thats because it doesn't know where to stop the context so we have to use ; to end 

(()=>{
    console.log("DB connected 2")
})()

