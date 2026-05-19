function dnaStrand(dna){

  const s = {
    "A" : "T",
    'C' : "G",
    "T" : "A",
    "G" : "C"
  }

  return dna.split('').map(el =>{
    return s[el]
  }).join("")
}