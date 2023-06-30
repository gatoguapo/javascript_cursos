const autos = ['Ford', 'Mazda', 'Honda', 'Toyota']

let i = 0

// while (i < autos.length) {
//     console.log(autos[i])
//     i++
// }

while (autos[i]) {
    if (i === 1) {
        i++
        continue
    }
    console.log(autos[i])
    i++
}