let inpEl = document.getElementById("inp-el")
let ansEl = document.getElementById("ans-el")
let val =""
function celToFh(){
  val = (inpEl.value * 9/5) + 32
  ansEl.textContent = val
}
function celToKv(){
  val = inpEl.value + 273.15
  ansEl.textContent = val
}
function fahToCe(){
  val = (inpEl.value - 32) * (5/9)
  ansEl.textContent = val
}
function fahToKv(){
  val = (inpEl.value - 32) * (5/9) + 273.15
  ansEl.textContent = val
}
function kevToCe(){
  val = inpEl.value - 273.15
  ansEl.textContent = val
}
function kevToFh(){
  val = (inpEl.value - 273.15) * (9/5) + 32
  ansEl.textContent = val
}
function clearMe(){
  
  inpEl.value =""
  ansEl.textContent = ""
}