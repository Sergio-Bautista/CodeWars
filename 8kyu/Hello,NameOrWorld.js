/*
function hello(name) {
  if(name === undefined){
    return `Hello, World!`
  }
  name = name.toLowerCase()

  let correctName = name 
  ? name[0].toUpperCase() + name.slice(1)
  : "World"

  
  return `Hello, ${correctName}!`

}
*/

function hello(name) {
  if(name === undefined){
    return `Hello, World!`
  }
  name = name.toLowerCase()

  let correctName = name 
  ? name[0].toUpperCase() + name.slice(1)
  : "World"

  
  return `Hello, ${correctName}!`

}