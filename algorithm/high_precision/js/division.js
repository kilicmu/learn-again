function division(a, b) {
    const va = []
    for (let i = a.length - 1; i >= 0; i--) va.push(Number(a[i]))

    const ret = []
    let t = 0
    for (let i = va.length - 1; i >= 0; i--) {
        if (i >= 0) t = t * 10 + va[i]
        ret.push(t / b | 0)
        t = t % b
    }
    return ret.reduce((acc, n) => acc + (n === 0 ? '' : n), '')
}
console.time("division")
const ret = division("12345", 100)
console.timeEnd("division")

console.log(ret)