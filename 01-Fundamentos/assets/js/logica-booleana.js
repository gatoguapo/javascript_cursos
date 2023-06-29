const regresaTrue = () => {
    console.log('Regresa true')
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false')
    return false;
}

console.warn('Not o la negacion')
console.log(true)
console.log(!true) //false
console.log(!false) //true
console.log('!null ', !null) //true
console.log('!undefined ', !undefined) //true
console.log('undefined == null?')
console.log(undefined == null)
console.log(!regresaFalse())

console.warn('And')
console.log(true && true) //true
console.log(true && false) //false
console.log("----------------------")
console.log(regresaFalse() && regresaTrue()) //false
console.log(regresaTrue() && regresaFalse()) //false
console.log(!regresaFalse() && regresaTrue()) //true

console.warn('Or') //true
console.log(true || false)
console.log(false || false)
console.log(regresaTrue() || regresaFalse())