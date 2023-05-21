// the forEach and filter method accepts a function
const cars = ['honda','toyota','benz','lexus']
function allCars(car, index){
console.log(`${index} : ${car}`)
}
cars.forEach(allCars)
const numbers = [1,2,3,8,90]
numbers.filter(function(nos){
  return nos > 5
})
// line 8-10 can also be coded like this
function num(nos){
  return nos > 5
}
numbers.filter(num)
//the map method is shown below

const digits = [10,20,30,40]
function div(dig){
  console.log(dig/10)
}
digits.map(div)
//or
digits.map(function(dig){
  console.log(dig/10)
})