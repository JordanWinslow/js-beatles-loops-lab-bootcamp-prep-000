var emptyArray = []

function theBeatlesPlay(musicians, instruments) {
  // receive 2 arrays
  for (let arrayIndex = 0; arrayIndex < musicians.length; arrayIndex++){
    // start at first index in the musicians array and iterate until the last element
    emptyArray[arrayIndex] = musicians[arrayIndex] + ' plays ' + instruments[arrayIndex]
    //update the array with the name of the current musician and the instrument they play 
  }
  return emptyArray
}
function johnLennonFacts(facts){
  // receive an array of facts about John Lennon
  var arrayIndex = 0
  while (arrayIndex < facts.length){
    facts[arrayIndex] += "!!!"
    arrayIndex++
  }
  return facts
}