function cmp(a, b) {
    if (a.length === b.length) {
        return Number(a[0]) >= Number(b[0])
    }
    return a.length >= b.length
}
function substitute(a, b) {
    if (!cmp(a, b)) {
        return '-' + substitute(b, a)
    }

    const va = []
    const vb = []
    for (let i = a.length - 1; i >= 0; i--) va.push(Number(a[i]))
    for (let i = b.length - 1; i >= 0; i--) vb.push(Number(b[i]))

    let t = 0
    const ret = []
    for (let i = 0; i < va.length; i++) {
        t = va[i] - t
        if (i < vb.length) t -= vb[i]
        ret.push((t + 10) % 10)
        if (t < 0) t = 1
        else t = 0
    }
    return ret.reduceRight((acc, n) => acc + (n === 0 ? '' : n), '')
}

console.time("substitute")
const result = substitute("113", '112')
console.timeEnd("substitute")
console.log(result)