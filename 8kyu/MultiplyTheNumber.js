/*
ack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

  3 -->    15  (  3 * 5¹)
 10 -->   250  ( 10 * 5²)
200 --> 25000  (200 * 5³)
  0 -->     0  (  0 * 5¹)
 -3 -->   -15  ( -3 * 5¹)
*/

function multiply(number){
  //your code here
  let exponent = String(number).length
  if(number < 0){
    exponent = exponent - 1
  }

  let result = number * Math.pow(5,exponent)
  return result

}