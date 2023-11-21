//Array is not a primitive data type its Array Object type
//ways to declare array 
let myarr=[0,1,2,3,4,5]
let arr=new Array("palak","aditi")
myarr.push(6) //adds element to the end of the array
myarr.pop(); //removes the last element of the array

myarr.unshift(9)//adds element to the front of array
//console.log(myarr);
myarr.shift()//removes element from the front of the array

myarr.includes(5) //returns true false
myarr.indexOf(4)//returns index of the element or -1 if absent
let newarr=myarr.join()//converts the array into a coma seperated string
//console.log(newarr)

let arr1=myarr.slice(1,4)// will return a subarray end limit is not included and the original array wont be changed
console.log("A ",myarr)
console.log(arr1)

let arr2=myarr.splice(1,4) // will return subarray including end limit and the original array will also be changed
console.log("B",myarr)
console.log(arr2)

