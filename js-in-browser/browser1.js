let parOne = document.getElementById("count-el")
let prevOne = document.getElementById("prev-el")
let count = 0
function inc(){
  count += 1
  parOne.innerHTML = count
}
function dec(){
  count -= 1
  parOne.innerHTML = count
}
function res(){
  count = 0
  parOne.innerHTML = count
}
function save(){
let slash = " - "
prevOne.textContent += slash + count
res()
}
