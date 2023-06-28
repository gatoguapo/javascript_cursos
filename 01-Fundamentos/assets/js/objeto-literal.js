let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Iron Man',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulk Buster'],
    direccion: {
        zip: '10080, 90265',
        ubicacion: 'Malibu, California'
    }
}

console.log(personaje)
console.log('Nombre', personaje.nombre)
console.log('Nombre', personaje['nombre'])
console.log('Edad', personaje.edad)
console.log('Cords', personaje.coords)
console.log('Lat', personaje.coords.lat)
console.log('Numero de trajes', personaje.trajes.length)
console.log('Ultimo traje', personaje.trajes[personaje.trajes.length-1])

const x = 'vivo';
console.log('Vivo', personaje[x])

delete personaje.edad
console.log('Edad', personaje.edad)

const entriesPares = Object.entries(personaje)
console.log(entriesPares)