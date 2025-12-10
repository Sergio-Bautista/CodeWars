/*
escription:
Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples
"Hi!" --> "H!!"
"!Hi! Hi!" --> "!H!! H!!"
"aeiou" --> "!!!!!"
"ABCDE" --> "!BCD!"

*/

function replace(s) {
  //coding and coding....
    const vowel = 'aeiouAEIOU'
    let str = s.split("").map(el =>{
      if(vowel.includes(el)){
        return "!"
      }else{
        return el
      }
    })
    return str.join("")

}