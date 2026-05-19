function filterString(value) {
    //Complete this function :)

    let number = value.split("").filter(el =>{
        // checks if the el is a number
        if(el.toLowerCase() == el.toUpperCase()){
            return el
        }
    })
    return Number(number.join(''))
  }