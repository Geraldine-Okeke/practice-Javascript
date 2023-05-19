//spread operatorscan be used to join two arrays
let clo1 = ["orange","pink"]
let clo2 = ["blue","black"]
let clo3 =["peach","purple"]
let cl4 = [...clo1,...clo2,...clo3]
console.log(cl4)

//also used tojoin 2 objects
let car1 ={name:"volvo"}
let car2 = { color:"red"}
let myCars ={...car1,...car2}
console.log(myCars)
//can be used to add new menbers to an array
let fruits =["kiwi","orange"]
let myFruits =[...fruits,"mango","cherry"]
console.log(myFruits)
//used to convert a string into an array
let name ="Geraldine"
let split = [...name]
console.log(split)

let obj = {
  key: 1,
  value: 4
};

let output = { ...obj };
output.value -= obj.key;

console.log(output.value);


