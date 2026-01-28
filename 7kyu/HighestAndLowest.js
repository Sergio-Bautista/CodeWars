/*
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples
highAndLow("1 2 3 4 5"); // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes
All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.
*/

function highAndLow(numbers){
//   let str = "8 3 -5 42 -1 0 0 -9 4 7 4 -4";
  let str = numbers;

function minusPlus(inputString) {
    let min = Infinity;
    let max = -Infinity;

    let strArray = inputString.split(" ");

    strArray.forEach(element => {
        let num = Number(element);
        if (num < min) min = num;
        if (num > max) max = num;
    });

    return `${max} ${min}`; // return as a string in "max min" format
}

let result = (minusPlus(str));  // Output: "42 -9"
return result
  
  
}