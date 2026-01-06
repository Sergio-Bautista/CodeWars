/*
Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
*/


function towerBuilder(nFloors) {
  // build here
  let pyramid = []
  let floor = 0;
  let star = 1;
  const width = nFloors * 2 - 1;
  do{
    floor +=1
    pyramid.push("*".repeat(star).padStart((width + star) / 2).padEnd(width))
    star += 2    
  }while(floor < nFloors)
  
  
  return pyramid

}
