let a = 10;

if (a >= 10) {
    console.log('"a" es mayor o igual a 10')
} else {
    console.log('"a" es menor a 10')
}

// console.log('Fin del programa')

const hoy = new Date()
let dia = hoy.getDay()
console.log({dia})

if (dia === 0) {
    console.log('Domingo')
} else if (dia === 1) {
    console.log('Lunes')
} else if (dia === 2) {
    console.log('Martes')
} else if (dia === 3) {
    console.log('Miercoles')
} else if (dia === 4) {
    console.log('Jueves')
} else if (dia === 5) {
    console.log('Viernes')
} else if (dia === 6) {
    console.log('Sabado')
}
