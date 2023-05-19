let states = ["Anambra", "Abuja","lagos","Portharcourt", "imo","Bayelsa","Rivers"]
function rest(a, b, ...c)//rest operator was used here
{
  console.log(`i love ${a},${b} and ${c}`)
}
rest(...states)//spread operator was used here

//another example
let fruits = ["Bannana","mango","apple","grape","cherry"]
function pick(...a)//rest operator was used her to pack
{
  console.log(`pick ${a}`)
}
pick(...fruits)//spread operator was used her to unpack