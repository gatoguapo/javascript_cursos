// function crearPersona(nombre, apellido) {
//     return { nombre, apellido }
// }
const crearPersona = (nombre, apellido) => ({nombre, apellido}) 

const persona = crearPersona('Fernando', 'Herrera')
console.log(persona)

function imprimeArgumentos() {
    console.log(arguments)
}

const imprimeArgumentos2 = (edad, ...args) => (args)

const [casado, vivo, nombre, saludo] = imprimeArgumentos2(10, true, false, 'Ramirez', 'Hola')
console.log({casado, vivo, nombre, saludo})

const {apellido: nuevoApellido} = crearPersona("Oscar", "Ramirez")
console.log({nuevoApellido})

let tony = {
    nombre: 'Tony Stark',
    codeName: 'Iron Man',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulk Buster'],
}

const imprimePropiedades = ({nombre, codeName, vivo, edad, trajes}) => {
    console.log({nombre})
    console.log({codeName})
    console.log({vivo})
    console.log({edad})
    console.log({trajes})
}

imprimePropiedades(tony)
