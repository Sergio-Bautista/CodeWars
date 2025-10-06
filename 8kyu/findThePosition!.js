/*
When provided with a letter, return its position in the alphabet.
Input :: "a"
Output :: "Position of alphabet: 1"
Note: Only lowercased English letters are tested
*/


function position(letter){
  //Write your own Code!
  let alpha ="abcdefghijklmnopqrstuvwxyz"
  return `Position of alphabet: ${alpha.indexOf(letter)+1}` 
}