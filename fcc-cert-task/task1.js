function palindrome(str) {
  str = str.replace(/[^a-zA-Z0-9 ]/g, '');
  str = str.replace(/\s/g, "")
  str = str.toLowerCase()
  let fwd = ''
  let bwd =''
  for(let i =0; i< str.length; i++){
      fwd += str[i]
  }
  console.log(fwd)
  for (let j = str.length-1; j >= 0; j--){
    bwd += str[j]
  }
  console.log(bwd)
  if (fwd === bwd){
    return true
  }
  else{
    return false
  }
  
}

let n = palindrome("1 eye for of 1 eye");
console.log(n)

