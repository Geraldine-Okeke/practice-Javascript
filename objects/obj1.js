const cars = {
  color: "black",
  trans : "manual"
}
let toyota = Object.create(cars)
toyota.engine = "good"
console.log(toyota.color)
//for-in acceses all the properties (including the inherited ones) of an object
for (props in toyota){
  console.log(props)
}
// for-of only accesses the direct properties of an object
for (props of Object.keys(toyota)){
  console.log(props +":"+ toyota[props] )
}