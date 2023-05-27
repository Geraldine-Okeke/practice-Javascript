let inpEl = document.getElementById("inp-el")
let ansEl = document.getElementById("ans-el")
let val =""
function mmToCm(){
  val =inpEl.value / 10
  ansEl.textContent = cm
}

function clearMe(){
  
   inpEl.value =""
   ansEl.textContent = ""
}
function allFunc(n){
  val = inpEl.value * n
  ansEl.textContent = val
}
function cmToMm(){
  allFunc(10)
}
function footToIn(){
  allFunc(12)
}
function milesToft(){
  allFunc(5280)
}
function milesToYd(){
  allFunc(1760)
}
function yardToFt(){
  allFunc(3)
}
function yardToIn(){
 allFunc(36)
}