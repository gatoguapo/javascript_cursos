const elMayor = (a, b) => (a > b) ? a : b

const tieneMembresia = (miembro) => (miembro) ? '2 dolares' : '10 dolares'

console.log(elMayor(20,15))
console.log(tieneMembresia(false))

const amigo = false
const amigos = [
    'Peter',
    'Tony',
    'Dr.Strange',
    amigo ? 'Thor' : 'Loki',
    // (() => 'Nick Fury')()
    elMayor(10,15)
]

console.log({amigos})