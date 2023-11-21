// singleton
// Object.create
//when we create objects using constructor it becomes singleton but when we create object using literals it does not become singleton 


// # object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",//now we cant acess it as jsUser.full name ..we have to to use [] to fetch it jUser["full name"]
    [mySym]: "mykey1",// we cant write mySym without [] because then it will be treated as a string key instead of symbol key.. and while fetching its value also we have to use []
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
console.log(JsUser["email"])
// console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());