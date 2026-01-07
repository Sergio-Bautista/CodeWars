/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.

*/
function accum(s) {
	// your code

  let newString = s.split("").map((el, index) => {
    return el.repeat(index+1)
    
  })

  const result = newString.map(word =>
  word[0].toUpperCase() + word.slice(1).toLowerCase()
);

  return result.join("-")


}