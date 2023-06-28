function saludar(nombre) {
    console.log('Hola '+nombre)
    console.log(arguments)
}

const saludar2 = function(nombre) {
    console.log('Hola '+nombre)
}

const saludarFlecha = (nombre) => {
    console.log('Hola '+nombre)
}

saludar('Ramirez', 40, true, 'Costa Rica');
saludar2('Jorge')
saludarFlecha('ESPARZA')