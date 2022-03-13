function multiplication(a, b) {
    const va = []
    for (let i = a.length - 1; i >= 0; i--) va.push(Number(a[i]))

    const ret = []
    let t = 0
    for (let i = 0; i < va.length || t; i++) {
        if (i < va.length) t += va[i] * b
        ret.push(t % 10)
        t = t / 10 | 0
    }
    return ret.reverse().join('')
}
console.time("mul")
const ret = multiplication("12345", 100)
console.timeEnd("mul")

console.log(ret)