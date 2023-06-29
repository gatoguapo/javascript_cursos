/**
 * Dias de semana abrimos a las 11,
 * pero los fines de semana abrimos a las 9
 */

// Entra a un sitio web, para consultar si esta abierto hoy
const dia = 0
const horaActual = 10

let horaApertura
let mensaje

if (dia === 0 || dia === 6) {
    console.log('Fin de semana')
    horaApertura = 9
} else {
    console.log('Dia de semana')
    horaApertura = 11
}

if (horaActual >= horaApertura) {
    mensaje = 'Esta abierto'
} else {
    mensaje = `Esta cerrado, hoy abrimos a las ${horaApertura}`
}

console.log({horaApertura, mensaje})