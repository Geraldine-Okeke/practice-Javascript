class Toyota {
  constructor(gear, brake){
    this.gear = gear
    this.brake = brake
  }
}
class Honda{
  constructor(color, hasBolt){
    this.color =color
    this.hasBolt = hasBolt
  } 
}
class Hyndaai{
  constructor(tyres, Hondabolt, toyo){
    this.tyreNo = tyres
    //here the properties of honda and toyota were both inherited using 'new' keyword
    this.hondaProp = new Honda(Hondabolt, true)
    this.toyotaProp = new Toyota(toyo,"faulty")

  }
}
let keke =new Hyndaai(4,"white","manual")
console.log(keke)