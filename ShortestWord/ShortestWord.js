function findShort(s){
  const arrayS = s.split(" ")
  const resultado = arrayS.reduce((a,b)=> a.length < b.length ? a: b)  
  return resultado.length
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps")) //3
console.log(findShort("turns out random test cases are easier than writing out basic ones")) //3
console.log(findShort("Let's travel abroad shall we")) //2