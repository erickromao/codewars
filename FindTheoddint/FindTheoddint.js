function findOdd(A) {
    const hashMap = {}
    A.forEach(valor => {
        hashMap[valor] = hashMap[valor] ? hashMap[valor] + 1 : 1
    })

    for (let i in hashMap) {
        if (hashMap[i] % 2 != 0) return parseInt(i)
    }
}

console.log(findOdd([7]))
console.log(findOdd([0]))
console.log(findOdd([1, 1, 2]))
console.log(findOdd([0, 1, 0, 1, 0]))
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]))