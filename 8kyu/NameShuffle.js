// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"


function nameShuffler(str){
  //Shuffle It
  let a = str.split(" ")
  let name = []
  name.push(a[1])
  name.push(a[0])
  return name.join(" ")
}