let states = ["Anambra", "Abuja","lagos","Portharcourt", "imo","Bayelsa","Rivers"]
function rest(a, b, ...c)//rest operator was used here
{
  console.log(`i love ${a},${b} and ${c}`)
}
rest(...states)//spread operator was used here

//another example
let fruits = ["Bannana","mango","apple","grape","cherry"]
function pick(...a){
  console.log(`pick ${a}`)
}
pick(...fruits)