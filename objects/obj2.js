var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
    
function logDiary(){
  for(each of dairy){
    console.log(each)
  }
}
logDiary()

const animal = {

  canJump: true
  
  };
  
  const bird = Object.create(animal);
  
  bird.canFly = true;
  
  /*bird.hasFeathers = true;
  function birdCan(){
    for(i of Object.keys(bird)){
      console.log(i + ": "+ bird[i])
    }
  }
  birdCan()
  function animalCan(){
    for (j in bird){
      console.log(j +": " + bird[j])
    }
  }
  animalCan()
  */
 function num(n){
  if (typeof(n) === "number"){
    console.log("this is a num")
  }
  else if (typeof(n)=== "string"){
    console.log("a string")
  }
  else{
    console.log("none")
  }
 }
 let n = num(6)
 console.log(n)
 