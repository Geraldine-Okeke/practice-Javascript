let res = document.getElementById("res-el")
let numOne = document.getElementById("num-one")
let numTwo = document.getElementById("num-two")
let first = 10
let  second = 2
numOne.textContent = first
numTwo.textContent =second
let ans;
function addition(){
   ans =first + second
  res.textContent = "Result: " + ans
}
function substraction(){
  ans =first - second
  res.textContent =  "REsult: "+ans
}
function division(){
  ans = first/second
  res.textContent = "Result: " + ans
}
function multiply(){
  ans = first * second
  res.textContent = "Result: " + ans
}
