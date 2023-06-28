let juegos = ['Zelda', 'Mario', 'Metroid', 'Chrono Trigger'];
console.log(juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length-1];
console.log(primero, ultimo);

juegos.forEach((juego,indice,arr)=> {
    console.log({juego,indice,arr})
})

let nuevaLong = juegos.push('F-Zero');
console.log(nuevaLong, juegos);

nuevaLong = juegos.unshift('Minecraft')
console.log(nuevaLong, juegos);

let elementoBorrado = juegos.pop();
console.log(elementoBorrado, juegos)

let pos = 1
let juegosBorrados = juegos.splice(pos, 2)
console.log(juegosBorrados, juegos)