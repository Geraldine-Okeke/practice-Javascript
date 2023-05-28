let selOne = document.getElementById("sel-one")
let selTwo = document.getElementById("sel-two")
let inpEl = document.getElementById("inp-el")
let ansEl =document.getElementById("ans-el")
let val;
let valOne = selOne.value
let valTwo = selTwo.value

function callMult(n){
  val = inpEl.value * n
  ansEl.textContent = val
}

function callDiv(n){
  val = inpEl.value / n
  ansEl.textContent = val
}
function callSame(){
  val = inpEl.value
  ansEl.textContent = val
}

function convertLen(){
  if(selOne.value === "kilometer" && selTwo.value === "km"){
    callSame()
  }
  else if(selOne.value === "kilometer" && selTwo.value === "m"){
    callMult(1000)
  }
  else if(selOne.value === "kilometer" && selTwo.value === "mi"){
    callDiv(1.609)
  }
  else if(selOne.value === "kilometer" && selTwo.value === "nm"){
    callMult(1e+12)
  }
  else if(selOne.value === "kilometer" && selTwo.value === "cm"){
    callMult(100000)
  }
  else if(selOne.value === "kilometer" && selTwo.value === "mlm"){
    callMult(1e+6)
  }
  else if(selOne.value === "kilometer" && selTwo.value === "mcm"){
    callMult(1e+9)
  }
  else if(selOne.value === "kilometer" && selTwo.value === "in"){
    callMult(39370)
  }
  else if(selOne.value === "kilometer" && selTwo.value === "ft"){
    callMult(3281)
  }
  else if(selOne.value === "kilometer" && selTwo.value === "yd"){
    callMult(1094)
  }
  else if(selOne.value === "kilometer" && selTwo.value === "dem"){
    callMult(10000)
  }
  else if(selOne.value === "kilometer" && selTwo.value === "dam"){
    callMult(100)
  }
  // for meter
  else if(selOne.value === "meter" && selTwo.value === "m"){
    callSame()
  }
  else if(selOne.value === "meter" && selTwo.value === "km"){
    callDiv(1000)
  }
  else if(selOne.value === "meter" && selTwo.value === "mi"){
    callDiv(1609)
  }
  else if(selOne.value === "meter" && selTwo.value === "nm"){
    callMult(1e+9)
  }
  else if(selOne.value === "meter" && selTwo.value === "cm"){
    callMult(100)
  }
  else if(selOne.value === "meter" && selTwo.value === "mlm"){
    callMult(1000)
  }
  else if(selOne.value === "meter" && selTwo.value === "mcm"){
    callMult(1e+6)
  }
  else if(selOne.value === "meter" && selTwo.value === "in"){
    callMult(39.37)
  }
  else if(selOne.value === "meter" && selTwo.value === "ft"){
    callMult(3.281)
  }
  else if(selOne.value === "meter" && selTwo.value === "yd"){
    callMult(1.094)
  }
  else if(selOne.value === "meter" && selTwo.value === "dem"){
    callMult(10)
  }
  else if(selOne.value === "meter" && selTwo.value === "dam"){
    callDiv(10)
  }
  //miles

  else if(selOne.value === "mile" && selTwo.value === "mi"){
    callSame()
  }
  else if(selOne.value === "miles" && selTwo.value === "km"){
    callMult(1.609)
  }
  else if(selOne.value === "miles" && selTwo.value === "m"){
    callMult(1609)
  }
  else if(selOne.value === "mile" && selTwo.value === "nm"){
    callMult(1.609e+12)
  }
  else if(selOne.value === "mile" && selTwo.value === "cm"){
    callMult(160900)
  }
  else if(selOne.value === "mile" && selTwo.value === "mlm"){
    callMult(1.609e+6)
  }
  else if(selOne.value === "mile" && selTwo.value === "mcm"){
    callMult(1.609e+9)
  }
  else if(selOne.value === "mile" && selTwo.value === "in"){
    callMult(63360)
  }
  else if(selOne.value === "mile" && selTwo.value === "ft"){
    callMult(5280)
  }
  else if(selOne.value === "mile" && selTwo.value === "yd"){
    callMult(1760)
  }
  else if(selOne.value === "mile" && selTwo.value === "dem"){
    callMult(16090)
  }
  else if(selOne.value === "mile" && selTwo.value === "dam"){
    callMult(160.9)
  }
  //nanometer
  else if(selOne.value === "nanometer" && selTwo.value === "nm"){
    callSame()
  }
  else if(selOne.value === "nanometer" && selTwo.value === "km"){
    callDiv(1e+12)
  }
  else if(selOne.value === "nanometer" && selTwo.value === "m"){
    callDiv(1e+9)
  }
  else if(selOne.value === "nanometer" && selTwo.value === "mi"){
    callDiv(1.609e+12)
  }
  else if(selOne.value === "nanometer" && selTwo.value === "cm"){
    callDiv(1e+7)
  }
  else if(selOne.value === "nanometer" && selTwo.value === "mlm"){
    callDiv(1e+6)
  }
  else if(selOne.value === "nanometer" && selTwo.value === "mcm"){
    callDiv(1000)
  }
  else if(selOne.value === "nanometer" && selTwo.value === "in"){
    callDiv(2.54e+7)
  }
  else if(selOne.value === "nanometer" && selTwo.value === "ft"){
    callDiv(3.048e+8)
  }
  else if(selOne.value === "nanometer" && selTwo.value === "yd"){
    callDiv(9.144e+8)
  }
  else if(selOne.value === "nanometer" && selTwo.value === "dem"){
    callDiv(1e+8)
  }
  else if(selOne.value === "nanometer" && selTwo.value === "dam"){
    callDiv(1e+10)
  }
// centimeter
else if(selOne.value === "centimeter" && selTwo.value === "cm"){
  callSame()
}
else if(selOne.value === "centimeter" && selTwo.value === "km"){
  callDiv(100000)
}
else if(selOne.value === "centimeter" && selTwo.value === "m"){
  callDiv(100)
}
else if(selOne.value === "centimeter" && selTwo.value === "mi"){
  callDiv(160900)
}
else if(selOne.value === "centimeter" && selTwo.value === "nm"){
  callMult(1e+7)
}
else if(selOne.value === "centimeter" && selTwo.value === "mlm"){
  callMult(10)
}
else if(selOne.value === "centimeter" && selTwo.value === "mcm"){
  callMult(10000)
}
else if(selOne.value === "centimeter" && selTwo.value === "in"){
  callDiv(2.54)
}
else if(selOne.value === "centimeter" && selTwo.value === "ft"){
  callDiv(30.48)
}
else if(selOne.value === "centimeter" && selTwo.value === "yd"){
  callDiv(91.44)
}
else if(selOne.value === "centimeter" && selTwo.value === "dem"){
  callDiv(10)
}
else if(selOne.value === "centimeter" && selTwo.value === "dam"){
  callDiv(1000)
}
//millimeter
else if(selOne.value === "millimeter" && selTwo.value === "mlm"){
  callSame()
}
else if(selOne.value === "millimeter" && selTwo.value === "km"){
  callDiv(1e+6)
}
else if(selOne.value === "millimeter" && selTwo.value === "m"){
  callDiv(1000)
}
else if(selOne.value === "millimeter" && selTwo.value === "mi"){
  callDiv(1.609e+6)
}
else if(selOne.value === "millimeter" && selTwo.value === "nm"){
  callMult(1e+6)
}
else if(selOne.value === "millimeter" && selTwo.value === "cm"){
  callDiv(10)
}
else if(selOne.value === "millimeter" && selTwo.value === "mcm"){
  callMult(1000)
}
else if(selOne.value === "millimeter" && selTwo.value === "in"){
  callDiv(25.4)
}
else if(selOne.value === "millimeter" && selTwo.value === "ft"){
  callDiv(304.8)
}
else if(selOne.value === "millimeter" && selTwo.value === "yd"){
  callDiv(914.4)
}
else if(selOne.value === "millimeter" && selTwo.value === "dem"){
  callDiv(100)
}
else if(selOne.value === "millimeter" && selTwo.value === "dam"){
  callDiv(10000)
}
//micrometer
else if(selOne.value === "micrometer" && selTwo.value === "mcm"){
  callSame()
}
else if(selOne.value === "micrometer" && selTwo.value === "km"){
  callDiv(1e+9)
}
else if(selOne.value === "micrometer" && selTwo.value === "m"){
  callDiv(1e+9)
}
else if(selOne.value === "micrometer" && selTwo.value === "mi"){
  callDiv(1.609e+9)
}
else if(selOne.value === "micrometer" && selTwo.value === "nm"){
  callMult(1000)
}
else if(selOne.value === "micrometer" && selTwo.value === "cm"){
  callDiv(10000)
}
else if(selOne.value === "micrometer" && selTwo.value === "mlm"){
  callDiv(1000)
}
else if(selOne.value === "micrometer" && selTwo.value === "in"){
  callDiv(25400)
}
else if(selOne.value === "micrometer" && selTwo.value === "ft"){
  callDiv(304800)
}
else if(selOne.value === "micrometer" && selTwo.value === "yd"){
  callDiv(914400)
}
else if(selOne.value === "micrometer" && selTwo.value === "dem"){
  callDiv(100000)
}
else if(selOne.value === "micrometer" && selTwo.value === "dam"){
  callDiv(1e+7)
}
//inch
else if(selOne.value === "inch" && selTwo.value === "in"){
  callSame()
}
else if(selOne.value === "inch" && selTwo.value === "km"){
  callDiv(39370)
}
else if(selOne.value === "inch" && selTwo.value === "m"){
  callDiv(39.37)
}
else if(selOne.value === "inch" && selTwo.value === "mi"){
  callDiv(63360)
}
else if(selOne.value === "inch" && selTwo.value === "nm"){
  callMult(2.54e+7)
}
else if(selOne.value === "inch" && selTwo.value === "cm"){
  callMult(2.54)
}
else if(selOne.value === "inch" && selTwo.value === "mlm"){
  callMult(25.4)
}
else if(selOne.value === "inch" && selTwo.value === "mcm"){
  callMult(25400)
}
else if(selOne.value === "inch" && selTwo.value === "ft"){
  callDiv(12)
}
else if(selOne.value === "inch" && selTwo.value === "yd"){
  callDiv(36)
}
else if(selOne.value === "inch" && selTwo.value === "dem"){
  callDiv(3.937)
}
else if(selOne.value === "inch" && selTwo.value === "dam"){
  callDiv(393.7)
}
//foot
else if(selOne.value === "foot" && selTwo.value === "ft"){
  callSame()
}
else if(selOne.value === "foot" && selTwo.value === "km"){
  callDiv(3281)
}
else if(selOne.value === "foot" && selTwo.value === "m"){
  callDiv(3.281)
}
else if(selOne.value === "foot" && selTwo.value === "mi"){
  callDiv(5280)
}
else if(selOne.value === "foot" && selTwo.value === "nm"){
  callMult(3.048e+8)
}
else if(selOne.value === "foot" && selTwo.value === "cm"){
  callMult(30.48)
}
else if(selOne.value === "foot" && selTwo.value === "mlm"){
  callMult(304.8)
}
else if(selOne.value === "foot" && selTwo.value === "mcm"){
  callMult(304800)
}
else if(selOne.value === "foot" && selTwo.value === "in"){
  callMult(12)
}
else if(selOne.value === "foot" && selTwo.value === "yd"){
  callDiv(3)
}
else if(selOne.value === "foot" && selTwo.value === "dem"){
  callMult(3.048)
}
else if(selOne.value === "foot" && selTwo.value === "dam"){
  callDiv(32.808)
}
//yard
else if(selOne.value === "yard" && selTwo.value === "yd"){
  callSame()
}
else if(selOne.value === "yard" && selTwo.value === "km"){
  callDiv(1094)
}
else if(selOne.value === "yard" && selTwo.value === "m"){
  callDiv(1.094)
}
else if(selOne.value === "yard" && selTwo.value === "mi"){
  callDiv(1760)
}
else if(selOne.value === "yard" && selTwo.value === "nm"){
  callMult(9.144e+8)
}
else if(selOne.value === "yard" && selTwo.value === "cm"){
  callMult(91.44)
}
else if(selOne.value === "yard" && selTwo.value === "mlm"){
  callMult(914.4)
}
else if(selOne.value === "yard" && selTwo.value === "mcm"){
  callMult(914400)
}
else if(selOne.value === "yard" && selTwo.value === "in"){
  callMult(36)
}
else if(selOne.value === "yard" && selTwo.value === "ft"){
  callMult(3)
}
else if(selOne.value === "yard" && selTwo.value === "dem"){
  callMult(9.144)
}
else if(selOne.value === "yard" && selTwo.value === "dam"){
  callDiv(10.936)
}
//decimeter
else if(selOne.value === "decimeter" && selTwo.value === "dem"){
  callSame()
}
else if(selOne.value === "decimeter" && selTwo.value === "km"){
  callDiv(10000)
}
else if(selOne.value === "decimeter" && selTwo.value === "m"){
  callDiv(10)
}
else if(selOne.value === "decimeter" && selTwo.value === "mi"){
  callDiv(16090)
}
else if(selOne.value === "decimeter" && selTwo.value === "nm"){
  callMult(1e+8)
}
else if(selOne.value === "decimeter" && selTwo.value === "cm"){
  callMult(10)
}
else if(selOne.value === "decimeter" && selTwo.value === "mlm"){
  callMult(100)
}
else if(selOne.value === "decimeter" && selTwo.value === "mcm"){
  callMult(100000)
}
else if(selOne.value === "decimeter" && selTwo.value === "in"){
  callMult(3.937)
}
else if(selOne.value === "decimeter" && selTwo.value === "ft"){
  callDiv(3.048)
}
else if(selOne.value === "decimeter" && selTwo.value === "yd"){
  callDiv(9.144)
}
else if(selOne.value === "decimeter" && selTwo.value === "dam"){
  callDiv(100)
}
//decameter
else if(selOne.value === "decameter" && selTwo.value === "dam"){
  callSame()
}
else if(selOne.value === "decameter" && selTwo.value === "km"){
  callDiv(100)
}
else if(selOne.value === "decameter" && selTwo.value === "m"){
  callMult(10)
}
else if(selOne.value === "decameter" && selTwo.value === "mi"){
  callDiv(160.9)
}
else if(selOne.value === "decameter" && selTwo.value === "nm"){
  callMult(1e+10)
}
else if(selOne.value === "decameter" && selTwo.value === "cm"){
  callMult(1000)
}
else if(selOne.value === "decameter" && selTwo.value === "mlm"){
  callMult(10000)
}
else if(selOne.value === "decameter" && selTwo.value === "mcm"){
  callMult(1e+7)
}
else if(selOne.value === "decameter" && selTwo.value === "in"){
  callMult(393.7)
}
else if(selOne.value === "decameter" && selTwo.value === "ft"){
  callMult(32.808)
}
else if(selOne.value === "decameter" && selTwo.value === "yd"){
  callMult(10.939)
}
else if(selOne.value === "decameter" && selTwo.value === "dem"){
  callMult(100)
}


}

function clearMe(){
  inpEl.value = ""
  ansEl.textContent = ""
}