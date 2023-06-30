const heroes = ['Batman', 'Superman', 'Mujer Maravilla', 'Aquaman']

console.warn('For tradicional')
for(i=0; i<heroes.length; i++) {
    console.log(heroes[i])
}

console.warn('For in')
for(i in heroes) {
    console.log(heroes[i])
}

console.warn('For of')
for(heroe of heroes) {
    console.log(heroe) 
}