const tmp = []
function merge_short(q, l, r) {
    if (l >= r) return;

    const mid = (l + r) >> 1;
    merge_short(q, l, mid)
    merge_short(q, mid + 1, r)

    let k = 0, i = l, j = mid + 1
    while (i <= mid && j <= r) {
        if (q[i] < q[j]) tmp[k++] = q[i++]
        else tmp[k++] = q[j++]
    }
    while (i <= mid) tmp[k++] = q[i++]
    while (j <= r) tmp[k++] = q[j++]
    for (let i = l, j = 0; i <= r; i++, j++) q[i] = tmp[j]
}

// => do test
const arr = [3, 2, 1, 5, 7, 2, 6]
console.time("merge_short")
merge_short(arr, 0, arr.length - 1)
console.timeEnd("merge_short")
console.log(arr)