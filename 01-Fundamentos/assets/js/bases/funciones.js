function saludar(nombre) {
    console.log('Hola '+nombre)
    console.log(arguments)
    return [1,2,3,4,5]
}

const saludar2 = function(nombre) {
    console.log('Hola '+nombre)
}

const saludarFlecha = (nombre) => {
    console.log('Hola '+nombre)
}

//const retornoDeSaludar = saludar('Ramirez', 40, true, 'Costa Rica');
// console.log({retornoDeSaludar})

// saludar2('Jorge')
// saludarFlecha('ESPARZA')

const sumar = (a, b) => {
    return a + b
}

const sumar2 = (a, b) => a + b

function getAleatorio() {
    return Math.random();
}

const getAleatorio2 = () => Math.random()

console.log(sumar(10,15))
console.log(sumar2(5,50))
console.log(getAleatorio())
console.log(getAleatorio2())