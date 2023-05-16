class Animals{
  constructor(legNo, hasTail, hasWings){
    this.legNo = 4,
    this.hasTail = false
    this.hasWings = true
    

  }
 
  legs(){
    console.log("the animal has", this.legNo, "legs")
  }
  tails(){
    console.log(this.hasTail = !this.hasTail)
  }
  wings(){
    if(this.hasWings == true){
      console.log("since, its",this.hasWings, "this animal can fly")
    }
    else {
      console.log( "since its",this.hasWings, "this animal cannot fly")

    }
  }
  getPrototype(){
    let pro = Object.getPrototypeOf(this)
    console.log(pro)
  }
}
let parrot = new Animals()

parrot.wings()
parrot.tails()
parrot.hasWings = false
parrot.wings()
parrot.getPrototype()
parrot.legs()
parrot.legNo = 2
parrot.legs()

let bull = new Animals(5,false,false)
console.log(bull)
parrot.getPrototype()