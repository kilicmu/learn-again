/**
 * 快速排序模板-JS版：
 */

function quick_short(arr, l, r) {
    if (l >= r) return
    let i = l - 1
    let j = r + 1
    const x = arr[(l + r) >> 1]

    while (i < j) {
        do i++; while (arr[i] < x)
        do j--; while (arr[j] > x)
        if (i < j) [arr[i], arr[j]] = [arr[j], arr[i]]
    }

    quick_short(arr, l, j)
    quick_short(arr, j + 1, r)
}

// => do test
const arr = [3, 2, 1, 5, 7, 2, 6]
console.time("quick_short")
quick_short(arr, 0, arr.length - 1)
console.timeEnd("quick_short")
console.log(arr)