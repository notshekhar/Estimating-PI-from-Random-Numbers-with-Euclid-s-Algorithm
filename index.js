const total = 10000000
// const randomNumbers = new Array(total)
//     .fill(0)
//     .map(() => Math.floor(Math.random() * total))

let coprimeCount = 0

//greatest common factor with Euclid's algorithm
function gcd(a, b) {
    if (b > a) [a, b] = [b, a]
    let r = a % b
    if (r == 0) return b
    return gcd(b, r)
}

process.stdout.write("Calculating value of PI...\r")
for (let i = 0; i < total; i++) {
    //gcd -> 1 both numbers are coprime
    let n1 = Math.floor(Math.random() * total) + 1
    let n2 = Math.floor(Math.random() * total) + 1
    if (gcd(n1, n2) == 1) coprimeCount++
}
// console.log(coprimeCount, total)
let pi = Math.sqrt((6 * total) / coprimeCount)
process.stdout.write("Final PI value is " + pi + "\r")
