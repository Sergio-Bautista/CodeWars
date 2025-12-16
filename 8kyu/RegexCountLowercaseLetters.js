function lowercaseCount(str){
    //How many?
    let count = 0
    
    str.split("").forEach(el =>{
      el >="a" && el <= "z" ? count += 1 : 0
    })

    return count
    
}