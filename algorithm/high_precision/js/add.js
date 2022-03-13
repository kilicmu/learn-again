function add(a, b) {
    const va = []
    const vb = []
    for (let i = a.length - 1; i >= 0; i--) va.push(Number(a[i]))
    for (let i = b.length - 1; i >= 0; i--) vb.push(Number(b[i]))

    let t = 0
    const ret = []
    for (let i = 0; i < va.length || i < vb.length; i++) {
        if (i < va.length) t += va[i]
        if (i < vb.length) t += vb[i]
        ret.push(t % 10)
        t = t / 10 | 0
    }
    if (t) ret.push(1)
    return ret.reverse().join('')
}

console.time("add")
const ret = add("0", "0")
console.timeEnd("add")
console.log(ret)