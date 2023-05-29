let selOne = document.getElementById("sel-one")
let selTwo = document.getElementById("sel-two")
let inpEl = document.getElementById("inp-el")
let ansEl =document.getElementById("ans-el")
let val;
function callSame(){
  val = inpEl.value
  ansEl.textContent = val
}


function convertTemp(){
  //celsius
  if(selOne.value === "celsius" && selTwo.value === "cl"){
    callSame()
  }
  if(selOne.value === "celsius" && selTwo.value === "fh"){
    val = (inpEl.value * (9/5)) + 32
    ansEl.textContent = val
  }
  if(selOne.value === "celsius" && selTwo.value === "ke"){
    val = inpEl.value + 273.15
    ansEl.textContent = val
  }
  //fahrenheit
  if(selOne.value === "fahrenheit" && selTwo.value === "fh"){
    callSame()
  }
  if(selOne.value === "fahrenheit" && selTwo.value === "cl"){
    val = (inpEl.value - 32 ) * (5/9)
    ansEl.textContent = val
  }
  if(selOne.value === "fahrenheit" && selTwo.value === "ke"){
    val = (inpEl.value - 32) *(5/9) + 273.15
    ansEl.textContent = val
  }

  //kelvin

  if(selOne.value === "kelvin" && selTwo.value === "ke"){
    callSame()
  }
  if(selOne.value === "kelvin" && selTwo.value === "cl"){
    val = inpEl.value - 273.15
    ansEl.textContent = val
  }
  if(selOne.value === "kelvin" && selTwo.value === "fh"){
    val = (inpEl.value - 273.15) *(9/5) + 32
    ansEl.textContent = val
  }
}
function clearMe(){
  inpEl.value = ""
  ansEl.textContent = ""
}