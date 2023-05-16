//this code explains the use of default parameters
function sub(num){
  return num + num
}
let fun = sub()
console.log("the result is", fun)
//the above code will return NaN because no argument as entered in the function call
//the below sub function has a default parameter so it will run perfectly
function add(a = 10){
  return  a + a
}
let res = add()
console.log("the ans is", res)