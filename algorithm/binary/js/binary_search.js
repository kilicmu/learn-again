/**
 * 整数二分
 */

// l = mid 此时需要补偿 + 1
function binary_search(arr, target) {
    let l = 0, r = arr.length - 1;
    while (l < r) {
        const mid = (l + r + 1) >> 1
        if (arr[mid] > target) r = mid - 1;
        else l = mid
    }
    return l
}

// l = mid + 1，不需要补偿 + 1
function binary_search_2(arr, target) {
    let l = 0, r = arr.length - 1;
    while (l < r) {
        const mid = (l + r) >> 1
        if (arr[mid] >= target) r = mid;
        else l = mid + 1
    }
    return l
}

const arr = [1, 2]
console.time("binary search")
const result1 = binary_search(arr, 1.5)
console.timeEnd("binary search")

console.log(result1)

console.time("binary search 2")
const result2 = binary_search(arr, 2)
console.timeEnd("binary search 2")

console.log(result2)

/**
 * 浮点二分
 */
function sqrt(n) {
    let l = 0,
        r = n
    while (r - l > 1e-8) {
        const mid = (l + r) / 2
        if (mid ** 2 >= n) r = mid
        else l = mid
    }
    return l
}

console.time("sqrt")
const result3 = sqrt(113)
console.timeEnd("sqrt")
console.log(result3)