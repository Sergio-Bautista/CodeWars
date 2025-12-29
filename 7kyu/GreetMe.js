/*
Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

Example:

"riley" --> "Hello Riley!"
"JACK"  --> "Hello Jack!"
*/

var greet = function(name) {
  let n = name.split("").map((el, index) => 
    index == 0 ? el.toUpperCase() : el)

  return `Hello ${n.join("")}!`

};
