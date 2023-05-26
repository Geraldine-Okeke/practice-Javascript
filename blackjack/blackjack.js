let msgEl = document.getElementById("msg-el")
let cardEl = document.getElementById("card-el")
let sumEl = document.getElementById("sum-el")
isAlive = false
hasBlackJack = false
//lets create a function that will generate a random number between 2 -11
function getRandom(){
  let random = Math.floor(Math.random()*13) + 2
  if(random >10){
    return 11
  }
  else if(random === 1){
    return 10
  }
  else{
    return random
  }
  
}
let firstCd = getRandom()
let allCards = [firstCd]
let msg =""
let sum = firstCd
function render(){
  isAlive = true
  
  cardEl.textContent = "Cards: "+ allCards
  sumEl.textContent = "Sum: " + sum
  if (sum < 21){
    msg ="pick more cards"
    msgEl.textContent = msg
  }
  else if (sum === 21){
    msg ="congratulations, you win"
    msgEl.textContent = msg
    hasBlackJack = true
  }
  else{
    msg ="GAME OVER"
    msgEl.textContent = msg
    isAlive = false
  }
}
function start(){
  render()
}
function newcd(){
  if(isAlive === true && hasBlackJack === false){
    let newCard = getRandom()
    allCards.push(newCard)
    sum += newCard
    sumEl.textContent = sum
    render()
  }
  
}