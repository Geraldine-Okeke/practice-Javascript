//this code explains the 'super' keyword
class Cars{
  constructor(tyres, year, transmission,mileage){
    this.tyres = tyres,
    this.year = year
    this.transmission = transmission
    this.mileage = mileage
  }
  old(){
    if (this.year <= 2020 && this.mileage > 100){
      console.log(this , "is very old")
    }
    else if(this.year <= 2020 && this.mileage < 100){
      console.log(this, "is not very old")
    }
    else if (this.year >2020 && this.mileage > 100){
      console.log(this, "is driven soo often but it is not old")
    }
    else{
      console.log(this, "is damn new")
    }
  }

}
let camry = new Cars(4,2000,"manual",50)
console.log(camry)
camry.old()
class Mercedes extends Cars {
  constructor(color,isHigh,tyres,year,transmission,mileage){
    super(tyres,year,transmission,mileage)
    this.color = color
    this.isHigh = isHigh
  }
  new(){
    super.old()
    console.log('done')
  }
  
}
var benz = new Mercedes("black",true,4,2021,"auto", 200,  )
console.log(benz)
benz.new()
