class Person{
  constructor(name ='Tom',age = 20,energy = 100){
    this.name =name
    this.age = age
    this.energy =energy

  }
  sleep(){
    this.energy += 10
    console.log("as he is asleep, his energy is at", this.energy)
  }
  doSomethingFun(){
    if(this.energy > 0){
      this.energy -= 10
      console.log("His energy is reducing and it's currently at", this.energy)
    }
    else if (this.energy == 0){
      this.sleep()
      console.log("He is exhausted, his energy is at", this.energy,'take some sleep')
    }
  }
}
class Worker extends Person{
  constructor(xp = 0,hourlyWage = 10,name,age,energy){
    super(name,age,energy)
    this.xp =xp
    this.hourlyWage = hourlyWage
  }
  goToWork(){
    this.xp += 10
    console.log("his experience point is =", this.xp)

  }
}
function intern(){
  let intern = new Worker(0,10,"Bob",21,110)
  intern.goToWork()
  return intern
}
intern()
function manager(){
  let manager = new Worker(100,30,"Alice",30,120)
  manager.doSomethingFun()
  return manager
}
manager()

