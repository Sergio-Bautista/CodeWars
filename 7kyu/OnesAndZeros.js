/*
Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
However, the arrays can have varying lengths, not just limited to 4.

*/

const binaryArrayToNumber = arr => {
  // your code
  arr.reverse()
  let result = 0

  let binary = {
    0 : 0,
    1 : 1,
    2 : 2,
    3 : 4,
    4 : 8,
    5 : 16,
    6 : 32,
    7 : 64,
    8 : 128
  }

  arr.forEach((el, index) =>{
    if(el != 0){
      result += binary[index + 1]
      console.log(index+1)
    }
  })
  return result
};