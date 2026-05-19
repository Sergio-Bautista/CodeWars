/*
The main idea is to count all the occurring characters in a string. 
If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
What if the string is empty? Then the result should be empty object literal, {}.
*/
function count(string) {
  // TODO
  let count = {}
  string.split("").forEach( element =>{
    // if the letter hasn't been seen it will return "undefined" therefore it will convert to a "0"
    // if the letter is has been seen it will be a "1" which is a "truthy" value so we increment by "1"
      count[element] = (count[element] || 0) + 1
  })
  return count
}


