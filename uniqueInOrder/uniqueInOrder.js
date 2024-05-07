var uniqueInOrder = function (iterable) {
    const resultado = []
    const arrayIterable = typeof iterable !== "string" ? iterable : iterable.split('')
    arrayIterable.filter((valor, index,array) => {
        if (array[index] != array[index+1]) resultado.push(valor) 
    })
    return resultado
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'))
console.log(uniqueInOrder('ABBCcAD'))
console.log(uniqueInOrder([1, 2, 2, 3, 3]))