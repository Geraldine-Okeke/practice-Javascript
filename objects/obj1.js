const cars = {
  color: "black",
  trans : "manual"
}
let toyota = Object.create(cars)
toyota.engine = "good"
console.log(toyota.color)
for (props in toyota){
  console.log(props)
}
for (props of Object.keys(toyota)){
  console.log(props +":"+ toyota[props] )
}