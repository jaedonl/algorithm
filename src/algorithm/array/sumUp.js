const sumUpForloop = (n) => {
    let total = 0
    for (let i = 1; i<=n; i++) {
        total += i
    }
    return total
}

const sumUpGood = (n) => {
    return (n * (n + 1)) / 2
}

var x = sumUpGood(3)
console.log(x)