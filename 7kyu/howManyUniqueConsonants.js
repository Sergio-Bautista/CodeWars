function countConsonants(str) {
    // Your code here!
    let count = ''
    const noneConsonants = 'aeiou'

    str.split('').forEach(el =>{
        el = el.toLowerCase();

        // check if element is a letter
        if(el.toLowerCase() !== el.toUpperCase()){
                // checks if the element is not repeated or a vowel
                if(!count.includes(el) && !noneConsonants.includes(el)){
                    count += el
                }
        }

    })
    return count.length
}

