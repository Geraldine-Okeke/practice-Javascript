let states = ["Anambra","Abuja","Lagos","Portharcout"]

function places(a,b,c,d){
  console.log(`visit ${a}, it's a good place , you can also try ${b},${c} and ${d}`)

}
places(...states)
// instead of this places(states[0], states[1], states[2],states[3]).the spread opetator makesour code easier and shorter