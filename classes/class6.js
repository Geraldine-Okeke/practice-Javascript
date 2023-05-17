class Animal{
  constructor(energy,color){
    this.energy = energy
    this.color = color
  }
  isActive(){
    if(this.energy> 0){
      this.energy -= 10
      console.log("energy is reducing")
    }
    else{
      this.sleep()
      console.log("sleep and get some energy")
    }
  }
  sleep(){
    this.energy += 10
    console.log("energy is increasing and its currently at", this.energy)
  }
  theColor(){
    console.log("the color is", this.color)
  }
}
class Bird extends Animal{
    constructor(canFly,energy,color){
      super(energy,color)
      this.canFly = canFly
      
    }
    
}
class Cat extends Animal{
  constructor(sound ="huuuuk", energy,color){
    super(energy,color)
    this.sound = sound
    
  }
}
class HouseCat extends Cat{
  constructor(tamed,catSound,sound,energy,color){
    super(sound,energy,color)
    this.tamed = tamed
    this.catSound = catSound
    
  }
  isTamed(){
    if(this.tamed == true){
      console.log("Feel free around it, it's a domestic cat")
    }
    else{
      console.log("Becarefull ,this is a wid cat")
    }
  }
}
class Tiger extends Cat{
  constructor(wild,tigerSound,sound,energy,color){
    super(sound,energy,color)
    this.wild = wild
    this.tigerSound = tigerSound

  }
}
class Penguin extends Bird{
  constructor(canSWim, canFly,energy,color){
    super(canFly,energy,color)
    this.canSWim = canSWim
  }
}
let smallTiger  = new Tiger(true,"meooow","aaaah",0,"grey")
console.log(smallTiger)
smallTiger.isActive()
smallTiger.sleep()
let smallCat = new HouseCat("false","meow","aaah",400,"white")
console.log(smallCat)
smallCat.isTamed()