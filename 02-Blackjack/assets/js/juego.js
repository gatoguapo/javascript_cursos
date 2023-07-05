let deck = []
const types = ['C', 'D', 'H', 'S'] 
const others = ['A', 'J', 'Q', 'K']

const createDeck = () => {
    for (i = 2; i<=10; i++) {
        for (type in types) {
            deck.push( i + types[type])
        }
    }

    for (type in types) {
        for (other in others) {
            deck.push( others[other] + types[type])
        }
    }

    deck = _.shuffle(deck)
    return deck
}

const hit = () => {
    if (deck.length === 0) {
        throw 'No hay cartas en el deck'
    }
    const card = deck.pop()
    return card
}

const cardValue = (card) => {
    const value = card.substring(0, card.length-1)
    if (isNaN(value)) {
        return (value === 'A') ? 11 : 10 
    } else {
        return (value * 1)
    }
} 

console.log(createDeck())
console.log(hit())
console.log(cardValue('QS'))

console.log(deck)