//singleton objects
const user=new Object();
user.id=1;
user.name="palak"
user.email="palak@gmail.com"
//console.log(user)
//contatinating the objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

const obj3=Object.assign({},obj1,obj2,obj4)// we are giving empty{} so that all the values will be asgined to it but if we don't then also it will work and all the values will be assigned to obj1
//console.log(obj3)
// we can do the same thing using spread operator as well
const obj5={...obj1,...obj2}
//console.log(obj5)
// console.log(user)
// console.log(Object.keys(user))//this will return an array of keys of the object
// console.log(Object.values(user))//this will return an array of keys of the object
// console.log(Object.entries(user))//this will return all the key value pairs as seperate arrays
// console.log(Object.hasOwnProperty("name"))//returns true if the object contains that property
//-----------------------------------
///DESTRUCTURING OF OBJECTS 

const course={
    name:"js in hindi",
    instructor:"hitesh",
    price:1000

}
//to access any property we have to use course.name or course["name"] but when we have to use same thing again and again we can destructure it (give it a name)
const {instructor}=course
console.log(instructor)
//or we can also give it a another name different from property name
const {price:rate} =course
console.log(rate)
 

