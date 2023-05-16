var bird ={
  canFly: true,
  hasWings: true,
  canWalk: false
}
let kite = Object.create(bird)
console.log(kite.canFly)
//the above code did not use the 'new' keyword because bird is not a constructor
let penguin = Object.create(bird)
penguin.canFly =false
console.log(penguin)
console.log("haswings:",penguin.hasWings)
console.log("canWalk:", penguin.canWalk)