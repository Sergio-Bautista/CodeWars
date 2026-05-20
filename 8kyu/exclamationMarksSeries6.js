function remove(s,n){
    //coding and coding....
    let count = 0
    let newS = s.split("")
    .filter(el =>{
        if(el === "!" && count < n ){
            count++
            return false
        }
        return true
    })
    .join("")

    return newS
}