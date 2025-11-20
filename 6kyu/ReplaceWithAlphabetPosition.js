/*
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
Input = "The sunset sets at twelve o' clock."
Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
*/

function alphabetPosition(text) {
    // create the object with the letter and its respecting index
  let alpha ={};
  "abcdefghijklmnopqrstuvwxyz"
  .split("")
  .forEach((letter, index) =>{
    alpha[letter] = index + 1
  })

//   check is the value exists in the object 
    let numbers = text.split("")
    .map(el => {
        el = el.toLowerCase()

        if(Object.hasOwn(alpha, el)){
            return alpha[el]
        }
        return ""
  })
//   filters the values that exist in the object
// filters values that are not an empty string
  return numbers
  .filter(num => {
        if(typeof num == "number"){
            return num
        }
    }).join(" ")
}