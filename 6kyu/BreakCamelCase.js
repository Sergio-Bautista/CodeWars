/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

function solution(string) {
    return string
    .split("")
    .map(el =>{
        const isUpper = el === el.toUpperCase();
        
        if(isUpper){
            return " " + el
        }
    return el

    }).join('')
}